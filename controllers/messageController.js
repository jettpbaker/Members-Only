import { createMessage, deleteMessageFromDb } from '../db/queries.js'

export const newMessage = async (req, res) => {
    const { message } = req.body
    const userId = req.user.id
    await createMessage(userId, message)
    res.redirect('/')
}

export const deleteMessage = async (req, res) => {
    const { id } = req.params
    await deleteMessageFromDb(id)
    res.redirect('/')
}