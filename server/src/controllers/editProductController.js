const products = require("../models/products");
const slugify = require("slugify");
const unidecode = require("unidecode");
const imagesProduct = require("../models/imagesProduct");
exports.editProduct = function (req, res) {
    const { codeProduct, nameProduct, quantityProduct, priceProduct, prmProduct, detailProduct, categoryProduct, 
        tradeMark, statusProduct, imgProduct, files, id } = req.body;
    function createSlug(string) {
        const asciiString = unidecode(string);
        const slug = asciiString
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        return slug;
    }
    const data = { 
        codeProduct: codeProduct,
        nameProduct: nameProduct,
        quantityProduct: quantityProduct,
        priceProduct: priceProduct,
        prmProduct: prmProduct,
        detailProduct: detailProduct,
        categoryProduct: categoryProduct,
        tradeMark: tradeMark,
        statusProduct: statusProduct,
        slug: createSlug(nameProduct),
        imgProduct: '/images/' + imgProduct
    };
    const imagesProductData = files.map((file) => {
        return {
            linkimages: '/images/' + file,
            idProduct: null,
        };
    });
    products.update(data, {
        where: {id: id}
    })
        .then(() => {
            const idProduct = id;
            Promise.all(imagesProductData.map((imageData) => {
                imageData.idProduct = idProduct;
                return imagesProduct.create(imageData)
                .catch((error) => {
                    console.error(error);
                });
            }))
            .catch((error) => {
                console.error("lỗi 2: "+error);
            });
        })
}