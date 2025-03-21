export const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).json({ msg: 'You are not authorised to view this resource' })
    }
} 