import { createMessage, deleteMessage as deleteMessageFromDb } from '../db/queries.js'

export const newMessage = async (req, res) => {
    const { message } = req.body
    const userId = req.user.id
    await createMessage(userId, message)
    res.redirect('/')
}

export const deleteMessage = async (req, res) => {
    const id = req.params.id
    await deleteMessageFromDb(id)
    res.redirect('/')
}