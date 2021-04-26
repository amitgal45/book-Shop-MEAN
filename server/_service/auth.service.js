const jwt = require('jsonwebtoken');

const USERS = [
    { id: 1, fullname: 'Book1', email: 'author1', password: '40', role: 1 },
    { id: 2, fullname: 'Book2', email: 'author2', password: 30, role: 2 },
    { id: 3, fullname: 'Book3', email: 'author3', password: 45, role: 2 },
    { id: 4, fullname: 'Book4', email: 'author4', password: 20, role: 1 },
]

exports.login = (req, res, next) => {
    console.log(req.body.email, req.body.password)
    let user = USERS.find(user => user.email == req.body.email && user.password == req.body.password)
    if (!user) {
        let err = Error("Please check your email and password")
        err.status = 200;
        next(err)
    }
    // const user = {
    //     id: 1,
    //     username: "john",
    //     email: "john@gmail.com",
    //     role: 2,
    // };
    jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET,{expiresIn:"12h"}, (err, token) => {
            if (err)
                next(err)
            res.cookie("token", token, { secure: true, httpOnly: true })
            res.cookie("exp", Date.now()+(3600 * 1000 * 12), { secure: true, httpOnly: true })
            res.json({
                token,
                iat: Date.now(),
                exp: Date.now()+( 3600 * 1000 * 12)
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

exports.isAuth = (req, res, next) => {
    try {
        console.log(req.body)
        let decoded = jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET);
        if (decoded)
            return res.status(200).json(true);
        return res.status(200).json(false);
    }
    catch (err) {
        console.log(err)
        err.status = 401;
        err.message = 'Unauthorized'
        next(err)
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