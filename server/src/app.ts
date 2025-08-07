import express from 'express'
const app = express()
import authRoute from "./Routes/Globals/auth/authRoute"
import instituteRoute from "./Routes/Institute/instituteRoute"
import courseRoute from './Routes/Institute/course/courseRoute'
import studentRoute from './Routes/Institute/student/studentRoute'
import categoryRoute from './Routes/Institute/category/categoryRoute'
import teacherInstituteRoute from './Routes/Institute/instituteRoute'
import teacherRoute from './Routes/Institute/teacher/teacherRoute'
import cors from 'cors'

app.use(express.json())
// alternative body-parser

// cors config 
app.use(cors({
    origin : "http://localhost:3000"
}))
//GLOBAL ROUTE
app.use("/api/auth",authRoute)

//INSTITUTE ROUTE
app.use("/api/institute",instituteRoute)
app.use('/api/institute/course',courseRoute)
app.use('/api/institute/student',studentRoute)
app.use('/api/institute/category',categoryRoute)
app.use('/api/institute/teacher',teacherInstituteRoute)

//TEACHER ROUTE
app.use("/api/teacher",teacherRoute)

export default app