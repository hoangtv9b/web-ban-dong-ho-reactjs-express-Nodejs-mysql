const express = require("express");
const app = express();
const cors = require("cors");
const multer = require('multer');
const cookieParser = require("cookie-parser");
const router = express.Router();
const addProduct = require("../controllers/addProductController");
const product = require("../controllers/productController");
const imagesProduct = require("../controllers/imagesProduct");
const editProduct = require("../controllers/editProductController");
const deleteProduct = require("../controllers/deleteController");
const addPost = require("../controllers/addPostController");
const auth = require("../controllers/authController");
const posts = require("../controllers/postsController");
const { verifyToken } = require("./middleware");
const search = require("../controllers/searchController");
const editPost = require("../controllers/editPostController");
const authController = require("../controllers/authController");
// app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "./src/public/images")
    },
    filename: function (req, file, cb) {
      return cb(null, `${file.originalname}`)
    }
})
const upload = multer({storage})
const initWebRoutes = (app) => {
    router.post("/api/login-admin/", auth.login);
    router.post("/api/register", auth.register);
    router.post("/api/add-product/", addProduct.addProduct);
    router.get("/api/product/", product.product);
    router.get("/api/images-product", imagesProduct.imagesProduct);
    router.put("/api/edit-product", editProduct.editProduct);
    router.delete("/api/delete-product", deleteProduct.deleteProduct);
    router.post("/api/add-post", addPost.addPost);
    router.get("/api/posts/", posts.posts);
    router.put("/api/edit-post/", editPost.editPost);
    router.post("/api/search", search.searchResult);
    router.post("/api/registerUser", authController.registerUser);
    router.post("/api/loginUser", authController.loginUser);
    router.post("/upload", upload.array('images'), (req, res) => {
      console.log(req.body);
    })
    return app.use("/", router);
}
module.exports = initWebRoutes;