import { getMessages } from '../db/queries.js'

export const getHome = async (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    const isMember = req.user ? req.user.member : false
    const isAdmin = req.user ? req.user.admin : false
    const messages = await getMessages()
    res.render('home', {
        isAuthenticated,
        isMember,
        isAdmin,
        messages
    })
} 