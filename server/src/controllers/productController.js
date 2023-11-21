const products = require("../models/products");
let data = {};
exports.product = function (req, res) {
    products.findAll()
        .then(getData => {
            data = getData;
        })
        .catch((error) => {
            console.error("lỗi lấy dữ liệu: " + error);
        })
    return res.status(200).json(data);
}