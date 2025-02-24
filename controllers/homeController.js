export const getHome = (req, res) => {
    res.render('home', {
        title: 'Home Page',
        message: 'Welcome to Express'
    })
} 