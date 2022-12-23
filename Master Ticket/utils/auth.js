const withAuth =(req, res, next) => {
    console.log('Peanuts')
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};
module.exports = withAuth;