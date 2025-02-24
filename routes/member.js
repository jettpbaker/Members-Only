import express from 'express'
import { getMember, checkPasscode, setMember } from '../controllers/memberController.js'
import { isAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', isAuth, getMember)
router.post('/', checkPasscode, setMember)

router.get('/protected', isAuth, (req, res) => {
    res.render('protected-route')
})

export default router 