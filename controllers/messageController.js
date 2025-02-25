import { createMessage } from '../db/queries.js'

export const newMessage = async (req, res) => {
    const { message } = req.body
    const userId = req.user.id
    await createMessage(userId, message)
    res.redirect('/')
}