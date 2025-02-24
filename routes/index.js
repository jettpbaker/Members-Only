import express from 'express'
import authRoutes from './auth.js'
import memberRoutes from './member.js'
import { getHome } from '../controllers/homeController.js'

const router = express.Router()

router.get('/', getHome)

router.use('/auth', authRoutes)
router.use('/member', memberRoutes)

export default router 