import { createMessage, deleteMessage as deleteMessageFromDB } from '../db/queries.js'

export const newMessage = async (req, res) => {
    const { message } = req.body
    const userId = req.user.id
    await createMessage(userId, message)
    res.redirect('/')
}

export const deleteMessage = async (req, res) => {
    const id  = req.params.id
    await deleteMessageFromDB(id)
    res.redirect('/')
}
