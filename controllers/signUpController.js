import { createUser } from '../db/queries.js'

export const getSignUp = (req, res) => {
    res.render('sign-up')
} 

export const postSignUp = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await createUser(username, password)
        console.log(user)
    } catch (err) {
        console.error(err)
        next(err)
    }
    res.redirect('/login')
} 