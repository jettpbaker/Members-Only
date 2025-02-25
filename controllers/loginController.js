import passport from 'passport'

export const getLogin = (req, res) => {
    res.render('login')
} 

export const postLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
      })(req, res, next)
} 
