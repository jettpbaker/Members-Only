import db from './pool.js'

export const createUser = async (username, password) => {
   const hashedPassword = await bcrypt.hash(password, 10)
   return db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword])
}