const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if(token){
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.ACCESS_KEY_TOKEN, (error, user) => {
            if(error){
                return res.status(404).json("errors!")
            }
            req.user = user;
            next();
        })
    }else {
        return res.status(401).json("You're not authenticated");
    }
}
module.exports = {
    verifyToken
}