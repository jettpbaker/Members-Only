import express from 'express'
import { getHome } from '../controllers/homeController.js'
import { getSignUp, postSignUp } from '../controllers/signUpController.js'
import { getLogin, postLogin } from '../controllers/loginController.js'
import { logout, getLogout } from '../controllers/logoutController.js'
import { getMember, checkPasscode, setMember } from '../controllers/memberController.js'
import {isAuth} from './isAuth.js'

const router = express.Router()

router.get('/', getHome)
router.get('/sign-up', getSignUp)
router.get('/login', getLogin)
router.get('/logout', getLogout)
router.get('/member', isAuth, getMember)

router.get('/protected-route', isAuth, (req, res) => {
    res.render('protected-route')
})

router.post('/sign-up', postSignUp)
router.post('/login', postLogin)
router.post('/logout', logout)   
router.post('/member', checkPasscode, setMember)

export default router 