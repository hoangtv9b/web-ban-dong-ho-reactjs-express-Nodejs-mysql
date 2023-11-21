const products = require("../models/products");
const imagesProduct = require("../models/imagesProduct");
exports.deleteProduct = function (req, res) {
    const { id } = req.body;
    const promise = new Promise((resolve, reject)=>{
        imagesProduct.destroy({
            where: {
                idProduct: id
            }
        })
        products.destroy({
            where: {
                id: id
            }
        })
    });
    promise.
        then(()=>{
            return res.status(200).json("deleted successfully!")
        }).
        catch((error)=>{
            console.error("error: "+ error);
        })  
}

