const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accountAdmin = require("../models/accountAdmin");
const accountUser = require("../models/accountUser");
const dotenv = require("dotenv");
const { Op } = require('sequelize');
dotenv.config();
const authController = {
    register: async (req, res) => {
        const { nameAdmin, email, password, avtAdmin } = req.body;
        const salt =  await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const data = {
            nameAdmin: nameAdmin,
            email: email,
            avtAdmin: "/images/"+avtAdmin,
            password: hashed,
        };
        accountAdmin.create(data)
            .then(()=>{
                res.status(200).json("success!")
            })
            .catch((error)=>console.log("error: "+error))
    },
    generateAccessToken : (admin) => {
        const payload = {
            id: admin.id,
            email: admin.email,
        };
        const token = jwt.sign(payload, process.env.ACCESS_KEY_TOKEN, { expiresIn: '30s' });
        return token;
    },
    generateRefreshToken : (admin) => {
        const payload = {
            id: admin.id,
            email: admin.email,
        };
        const token = jwt.sign(payload, process.env.ACCESS_KEY_TOKEN, { expiresIn: '365d' });
        return token;
    },
    // token user
    generateUserAccessToken : (user) => {
        const payload = {
            id: user.id,
            email: user.email,
        };
        const token = jwt.sign(payload, process.env.ACCESS_KEY_TOKEN, { expiresIn: '30s' });
        return token;
    },
    generateUserRefreshToken : (user) => {
        const payload = {
            id: user.id,
            email: user.email,
        };
        const token = jwt.sign(payload, process.env.REFRESH_KEY_TOKEN, { expiresIn: '365d' });
        return token;
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const admin = await accountAdmin.findOne({where: {
                email: email,
                }
            }    
        );
        if(admin){
            const validPassword = await bcrypt.compare(
                password, admin.password
            )
            if(!validPassword){
                const data = "";
                res.status(200).json(data)
            }else{
                
                const accessToken = authController.generateAccessToken(admin);
                const data = {
                    token: accessToken,
                    nameAdmin: admin.nameAdmin,
                    avtAdmin: admin.avtAdmin
                }
                res.status(200).json(data);
            }
        }else{
            const data = "";
            res.status(200).json(data)
        }
    },
    registerUser: async (req, res) => {
        try{
            const { email, username, password, namelogin, numberphone } = req.body;
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)
            const data = {
                email: email,
                username: username,
                password: hashed,
                namelogin: namelogin,
                numberphone: numberphone
            }
            await accountUser.findOne({ where: { email: email } })
                .then(user => {
                    if(user){
                        return res.status(404).json("email already exists!");
                    }else{
                        accountUser.create(data)
                            .then(()=>{
                                res.status(200).json(user);
                            })
                    }
                })
        }catch(error){
            res.status(500).json(err);
        }
    },
    loginUser: async (req, res) => {
        try{
            const { nameLogin, password } = req.body;
            const user = await accountUser.findOne({
                where: {
                    [Op.or]: [
                        {
                            namelogin: {
                                [Op.like]: `%${nameLogin}%`
                            }
                        },
                        {
                            email: {
                                [Op.like]: `%${nameLogin}%`
                            }
                        }
                    ]
                }
            })
            if(user){
                const validPassword = await bcrypt.compare(
                    password, user.password
                )
                if(!validPassword){
                    return res.status(404).json("wrong password!")
                }else{
                    const accessToken = authController.generateUserAccessToken(user);
                    const refreshToken = authController.generateUserRefreshToken(user);
                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        secure: false,
                        path: "/",
                        sameSite: "strict"
                    })
                    const { id, email, username, namelogin, numberphone, createdAt, updatedAt } = user;
                    return res.status(200).json({accessToken, id, email, username, namelogin, numberphone, createdAt, updatedAt, accessToken, refreshToken })
                }
            }else{
                return res.status(404).json("user not exists!")
            }
        }catch(error){
            console.log(error)
        }
    }
}
module.exports = authController;