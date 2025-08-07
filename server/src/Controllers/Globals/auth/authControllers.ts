/**
0.Register/sign-up flow
in-comming data => username,e-mail, password
processing/checking => email valid,complosory data checking
db query => CRUD operations for user data

1.login/logout

2.forget password

3.reset password/otp

 */

/*
1.login-flow:
=>email/username, password(basic)
email, password --> data accept --> validation --> 
// first check email exit or not (verify email) --> if yes --> check password mailyo vane
-->token generation (json web token)
-->  not registered-- garo to check email and password at the same time

=>google login/github login (auth)
=>email login(SSO) (single sign on)

*/

import { Request, Response, NextFunction } from "express";
import User from "../../../Database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// const registerUser = async (req: Request, res: Response, next: NextFunction) => {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password) {
//         return res.status(400).json({
//             message : "please provide username, email and password"
//         });
//     }
//     await User.create({
//         username,
//         email,
//         password
//     });
//     res.status(200).json({
//         message : "User registered successfully",
//     });
// };

// export { registerUser };

class AuthController {
  static async registerUser(req: Request, res: Response, next: NextFunction) {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "no data was sent",
      });
    }
    const { username, email, password } = req.body;
    await User.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 12), // Hashing the password , 12 mean how much bold
    });
    res.status(201).json({
      message: "User registered successfully",
    });
  }

  static async loginUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Please provide email and password",
      });
      return;
    }
    // check if email exists in user table
    const data = await User.findAll({
      where: {
        email,
      },
    });

    if (data.length === 0) {
      return res.status(404).json({
        message: "Not registered",
      });
    } else {
      // check if password is correct - nepal123 - hash password -common signature and done
      // compare(plain password , hashed password registered)
      const isPasswordMatch = bcrypt.compareSync(password, data[0].password);
      if (isPasswordMatch) {
        // generate token
        const token = jwt.sign(
          { id: data[0].id },
          process.env.JWT_SECRET as string,
          { expiresIn: "30d" }
        );
        res.status(200).json({
          message: "Login successful",
          token,
        });
      } else {
        return res.status(403).json({
          message: "Incorrect email or password",
        });
      }
    }
  }
}

export default AuthController;
