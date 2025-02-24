import { createUser } from '../db/queries.js'

export const getSignUp = (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    res.render('sign-up', {isAuthenticated})
} 

export const postSignUp = async (req, res) => {
    const { username, password } = req.body
    try {
        await createUser(username, password)
    } catch (err) {
        console.error(err)
        next(err)
    }
    res.redirect('/login')
} 