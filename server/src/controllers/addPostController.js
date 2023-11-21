const posts = require("../models/posts");
const slugify = require("slugify");
const unidecode = require("unidecode");
exports.addPost = function (req, res) {
    const {titlePost, imagePost, category, tag, content, author} = req.body;
    function createSlug(string) {
        const asciiString = unidecode(string);
        const slug = asciiString
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        return slug;
    }
    const data = {
        titlePost: titlePost,
        imagePost: '/images/' + imagePost,
        author: author,
        category: category,
        content: content,
        tag: tag,
        slug: createSlug(titlePost),
    }
    posts.create(data)
        .catch(()=> res.status(500).json("sign up failed!"))
    return res.status(200).json("success!")
}