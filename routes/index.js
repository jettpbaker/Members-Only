import express from 'express'
import { getHome } from '../controllers/homeController.js'
import { getSignUp } from '../controllers/signUpController.js'
import { getLogin } from '../controllers/loginController.js'
import { postSignUp } from '../controllers/signUpController.js'
import { postLogin } from '../controllers/loginController.js'
const router = express.Router()

router.get('/', getHome)
router.get('/sign-up', getSignUp)
router.get('/login', getLogin)

router.post('/sign-up', postSignUp)
router.post('/login', postLogin)

export default router 