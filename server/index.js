import express from 'express'
import cors from 'cors'
/*cors stands for Cross-origin resource sharing. 
Purpose: We used cors when we works with api. The purpose of cors is to allow resources from one domain to be requested by another domain.
basically cors ensures that frontend (in our case it is react) running on one domain tries to fetch data (e.g department data) from an api running on a different domain .
it ensures frontend can make requests to the backend api without secuirty restricitions enfoorced by browsers.
*/

//now some routes 
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js' 
import settingRouter from './routes/setting.js'
import dashboardRouter from './routes/dashboard.js'
import connectToDatabase from './db/db.js'

connectToDatabase() 
const app = express() // we created object of the express named app
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))//images we stored called them.
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/dashboard', dashboardRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`)
})//prints on command prompt that our server is running on what port
