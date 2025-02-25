export const getHome = (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    res.render('home', {
        isAuthenticated
    })
} 