
import express, { Request, Router } from "express"
import isLoggedIn from "../../../middleware/middleware"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
import { createCourse, deleteCourse, getAllCourse, getSingleCourse } from "../../../Controllers/institute/course/courseController"

// import {multer,storage} from './../../../middleware/multerMiddleware'
// cb(error,success), cb(error)

import upload from "../../../middleware/multerUpload"
// const upload = multer({storage : storage })

const router:Router = express.Router()

//fieldname -- frontend/postman bata chai k name aairaxa file vanne kura 
router.route("/")
.post(isLoggedIn,upload.single('courseThumbnail'), asyncErrorHandler(createCourse))
.get(isLoggedIn, asyncErrorHandler(getAllCourse))


router.route("/:id").get(asyncErrorHandler(getSingleCourse)).delete(isLoggedIn,asyncErrorHandler(deleteCourse))

export default router

 