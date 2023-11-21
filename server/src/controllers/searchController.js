const posts = require("../models/posts");
const products = require("../models/products");
const { Op } = require('sequelize');
let data = {}
exports.searchResult = (req, res) => {
    const { search, selectSearch } = req.body;
    if(selectSearch == "Sản phẩm"){
        if(!search || search.length === 0){
            products.findAll()
                .then((data)=>{
                    return res.status(200).json(data);
                })
        }else{
            products.findAll({
                where : {
                    [Op.or] : [
                        {
                            nameProduct: {
                                [Op.like]: `%${search}%`
                            }
                        }
                        ,
                        {
                            categoryProduct: {
                                [Op.like]: `%${search}%`
                            } 
                        },
                        {
                            priceProduct: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            tradeMark: {
                                [Op.like]: `%${search}%`
                            }
                        }
                    ]
                }
            })
                .then((data)=>{
                    return res.status(200).json(data);
                })
                .catch((error) => {
                    return res.status(500).json("Error!"+error);
                })
        }
        
    }
    if(selectSearch == "Tin tức"){
        if(!search || search.length === 0){
            posts.findAll()
                .then((data)=>{
                    return res.status(200).json(data);
                })
                .catch((error)=>{
                    return res.status(500).json("Error!"+error);
                })
        }else{
            posts.findAll({
                where: {
                    [Op.or]: [
                        {
                            titlePost: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            category: {
                                [Op.like]: `%${search}%`
                            }
                        },
                    ]
                }
            })
                .then((data)=>{
                    return res.status(200).json(data);
                })
                .catch((error)=>{
                    return res.status(500).json("Error!"+error);
                })
        }
    }
}