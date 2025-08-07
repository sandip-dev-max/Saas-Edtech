
import jwt from 'jsonwebtoken'

const generateJWTToken = (data : {
    id : string, 
    instituteNumber ?: string
})=>{
    //@ts-ignore
    const token =  jwt.sign(data,process.env.JWT_SECRET!,{
        expiresIn : process.env.JWT_EXPIRES_IN
       })
    return token; 
}


export default generateJWTToken