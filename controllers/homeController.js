export const getHome = (req, res) => {
    const isAuthenticated = req.isAuthenticated()
    res.render('home', {
        title: 'Home Page',
        message: 'Welcome to the home page',
        isAuthenticated
    })
} 