const formidable = require('')
const Product = require('../models/product')

exports.create = (req, res) => {
let form = new formidable.IncomingForm()
form.keepExtensions = true
form.parse(req, (err, fields, files) => {
    if (err) {
       return res.status(400).json({
        error: 'Image could not be uploaded'
       })
    }
    const {name, description, price, quantity, category, shipping} = fields

    if (!name || !description || !price || !quantity || !category || !shipping) {
        return res.status(400).json({
            error: 'All fields are required.'
        })
    }
    let product = new Product(fields)

    if (files.photo) {
        if (files.photo.size > 1000000) {
            return res.status(400).json({
                error: 'Image must be less than 1MB in size.'
            })
        }
        product.photo.data = fs.readFileSync(files.photo.path)
        product.photo.contentType = files.photo.type
    }
    product.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: 'error'
                // errorHandler(err)
            })
        }
        res.json(result)
    })
})
}