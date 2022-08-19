const express = require('express');
const router = express.Router();
// const markdown = require('./../views/extras/markdown.md');

const { marked } = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const dompurify = createDomPurify(new JSDOM('').window);

router.get('/', async (req, res) => {
    let values = await req.body.markdown;
    // values = dompurify.sanitize(marked.parse(values))
    res.render("articles/try", { values: values});
})

router.post('/', async (req, res) => {
    let values = await req.body.markdown;
    values = dompurify.sanitize(marked.parse(values))
    res.render("articles/try", { values: values});
})

module.exports = router;