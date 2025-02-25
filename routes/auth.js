import express from 'express'
import { getSignUp, postSignUp } from '../controllers/signUpController.js'
import { getLogin, postLogin } from '../controllers/loginController.js'
import { logout, getLogout } from '../controllers/logoutController.js'

const router = express.Router()

router.get('/sign-up', getSignUp)
router.post('/sign-up', postSignUp)

router.get('/login', getLogin)
router.post('/login', postLogin)

router.get('/logout', getLogout)
router.post('/logout', logout)

export default router