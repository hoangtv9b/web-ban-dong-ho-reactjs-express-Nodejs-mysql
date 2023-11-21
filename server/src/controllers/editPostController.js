const posts = require("../models/posts");
const unidecode = require("unidecode");
exports.editPost = function (req, res) {
    const {titlePost, imagePost, author, content, tag, category, id } = req.body;
    function createSlug(string) {
        const asciiString = unidecode(string);
        const slug = asciiString
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        return slug;
    }
    console.log(id);
    const data = {
        titlePost: titlePost,
        imagePost: '/images/' + imagePost,
        author: author,
        category: category,
        content: content,
        tag: tag,
        slug: createSlug(titlePost),
    }

    posts.update(data, {
        where: {id: id}
    })
        .then(()=>{
            res.status(200).json("success!")
        })
        .catch((error)=>{
            console.log(error)
        })
}