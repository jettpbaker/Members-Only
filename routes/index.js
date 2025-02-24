import express from 'express'
import { getHome } from '../controllers/homeController.js'
import { getSignUp } from '../controllers/signUpController.js'
const router = express.Router()

router.get('/', getHome)

router.get('/sign-up', getSignUp)

export default router 