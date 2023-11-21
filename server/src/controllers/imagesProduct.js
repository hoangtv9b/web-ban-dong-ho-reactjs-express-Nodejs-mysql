const imagesProduct = require("../models/imagesProduct");
let data = {}
exports.imagesProduct = (req, res) => {
    imagesProduct.findAll()
        .then((getData)=>{
            data = getData;
        })
        .catch((err)=>{
            console.log("error get data: " + err);
        })
    return res.status(200).json(data);
}