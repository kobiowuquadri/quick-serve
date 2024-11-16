import express from 'express'
import { loginController, registerController, verifyEmailController } from '../../controllers/userController/authControllers.js'
import { upload } from '../../utils/index.js'
import { verify } from '../../middlewares/auth-middleware.js'
const userRouter = express.Router()


userRouter.post('/register', upload.single('profilePics'), registerController)
userRouter.post('/login', loginController)
userRouter.get('/verify-email', verifyEmailController) 

// router.get('/verify-email', verifyEmail)
// router.post('/user-login', loginUser)
// router.post('/forget-password', forgetPassword)
// router.get('/reset-password/:id/:token', getResetPassword)
// router.post('/reset-password/:id/:token', postResetPassword)


export default userRouter