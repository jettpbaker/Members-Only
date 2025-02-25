import passport from 'passport'

export const getLogin = (req, res) => {
    res.render('login')
} 

export const postLogin = (req, res, next) => {
    const isAuthenticated = req.isAuthenticated()
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        isAuthenticated
      })(req, res, next)
} 
