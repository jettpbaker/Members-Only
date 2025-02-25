export const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error(err)
            return next(err)
        }
        res.redirect('/')
    })
}

export const getLogout = (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    res.render('logout', {isAuthenticated})
}