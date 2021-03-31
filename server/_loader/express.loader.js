const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
module.exports = function expressLoader(app) {
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(cors())
}
