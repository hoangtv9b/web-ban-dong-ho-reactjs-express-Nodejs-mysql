const posts = require("../models/posts");
let data = {};
exports.posts = function (req, res) {
    posts.findAll()
        .then(getData => {
            data = getData;
        })
        .catch((error) => {
            console.error("lỗi lấy dữ liệu: " + error);
            return res.status(500).json("get data failed!")
        })
    return res.status(200).json(data);
}