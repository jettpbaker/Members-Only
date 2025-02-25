import { setUserAsMember } from '../db/queries.js'

export const getMember = (req, res) => {
    res.render('member', {
        isAuthenticated: req.isAuthenticated(),
        isMember: req.user.member ?? false
    })
}

export const checkPasscode = (req, res, next) => {
    const { passcode } = req.body
    if (passcode === 'potato') {
        next()
    } else {
        res.send('Invalid passcode')
    }
}

export const setMember = (req, res) => {
    const userId = req.user.id
    setUserAsMember(userId)
    res.redirect('/')
}

