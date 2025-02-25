import db from './pool.js'
import bcrypt from 'bcryptjs'

export const createUser = async (username, password) => {
   const hashedPassword = await bcrypt.hash(password, 10)
   return db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword])
}

export const getUserByUsername = async (username) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username])
  return result.rows[0]
}

export const getUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id])
  return result.rows[0]
}

export const setUserAsMember = async (userId) => {
  return db.query('UPDATE users SET member = TRUE WHERE id = $1', [userId])
}

export const createMessage = async (userId, message) => {
  return db.query('INSERT INTO messages (user_id, message) VALUES ($1, $2)', [userId, message])
}

export const getMessages = async () => {
  const result = await db.query(`
    SELECT messages.*, users.username 
    FROM messages 
    JOIN users ON messages.user_id = users.id 
    ORDER BY messages.posted DESC
  `)
  return result.rows
} 

export const deleteMessage = async (id) => {
  return db.query('DELETE FROM messages WHERE id = $1', [id])
}