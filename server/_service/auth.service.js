const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {

    const user = {
        id: 1,
        username: "john",
        email: "john@gmail.com",
        role: 2,
    };

    jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if (err)
            next(err)
        res.cookie("jwt", token, { secure: true, httpOnly: true })
        res.json({
            token
        });
    });

};

// @@ Auth- Middleware
exports.isVerify = (req, res, next) => {

    try {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== "undefined") {
            const bearerToken = bearerHeader.split(" ")[1];
            // verify a token symmetric - synchronous
            let decoded = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
            if (decoded)
                next();
        }
    }

    catch (err) {
        err.status = 401;
        err.message = 'Unauthorized'
        next(err)
    }

}

// @@ Auth- Middleware
exports.isAdmin = (req, res, next) => {
    try {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== "undefined") {
            const bearerToken = bearerHeader.split(" ")[1];
            // verify a token symmetric - synchronous
            let decoded = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
            if (decoded) {
                if (decoded.user.role === 1)
                    throw new Error('User isnt admin')
                next();
            }

        }
    }
    catch (err) {
        console.log(err.message)
        res.sendStatus(401)
    }
}


exports.refresh = function (req, res) {

    let accessToken = req.cookies.jwt

    if (!accessToken) {
        return res.status(403).send()
    }

    let payload
    try {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    }
    catch (e) {
        return res.status(401).send()
    }

    //retrieve the refresh token from the users array
    let refreshToken = users[payload.username].refreshToken

    //verify the refresh token
    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    }
    catch (e) {
        return res.status(401).send()
    }

    let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,
        {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

    res.cookie("jwt", newToken, { secure: true, httpOnly: true })
    res.send()
}