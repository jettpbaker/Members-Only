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