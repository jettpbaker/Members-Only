import express from 'express'
import { getHome } from '../controllers/homeController.js'
import { getSignUp, postSignUp } from '../controllers/signUpController.js'
import { getLogin, postLogin } from '../controllers/loginController.js'
import { logout, getLogout } from '../controllers/logoutController.js'

const router = express.Router()

router.get('/', getHome)
router.get('/sign-up', getSignUp)
router.get('/login', getLogin)
router.get('/logout', getLogout)

router.get('/protected-route', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    res.render('protected-route')
})

router.post('/sign-up', postSignUp)
router.post('/login', postLogin)
router.post('/logout', logout)   

export default router 