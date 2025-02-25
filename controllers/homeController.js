import { getMessages } from '../db/queries.js'

export const getHome = async (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    const isMember = req.user.member ?? false
    console.log(req.user)
    const isAdmin = req.user.admin
    const messages = await getMessages()
    res.render('home', {
        isAuthenticated,
        isMember,
        isAdmin,
        messages
    })
} 