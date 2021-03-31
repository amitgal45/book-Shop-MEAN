/////// ROUTES
const BooksRoute = require('./book.route')
const UserRoute = require('./user.route')
const { login, refresh, isVerify } = require('../_service/auth.service')


module.exports = function indexRoute(app) {
    app.use('/api/book', BooksRoute)
    app.use('/api/user', UserRoute)

    app.post('/login', login)
    // app.post('/refrsh', refresh)
    // app.post('/verify',isVerify)

    // Catching Errors
    app.use((req, res, next) => {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500).send({
            error: {
                status: error.status || 500,
                message: error.message || 'Internal Server Error',
            },
        });
    });

}

