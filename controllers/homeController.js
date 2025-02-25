import { getMessages } from '../db/queries.js'

export const getHome = async (req, res) => {
    const messages = await getMessages()
    const isAuthenticated = req.isAuthenticated()
    res.render('home', {
        isAuthenticated,
        messages
    })
} 