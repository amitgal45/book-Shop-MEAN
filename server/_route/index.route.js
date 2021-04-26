/////// ROUTES
const BooksRoute = require('./book.route')
const UserRoute = require('./user.route')
const ChatRoute = require('./chat.route')

const { login, isAuth, isVerify } = require('../_service/auth.service')


module.exports = function indexRoute(app) {
    app.use('/api/book', BooksRoute)
    app.use('/api/user', UserRoute)
    app.use('/api/chat', ChatRoute)
    app.post('/login', login)
    // app.post('/refrsh', refresh)
    app.post('/verify',isVerify)
    app.post('/auth',isAuth)
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

