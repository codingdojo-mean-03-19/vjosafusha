const Product = require('mongoose').model('Product');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Product.find({})
      .then(products => res.json(products))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { product_id: ProductId } = req.params;
    Product.findById(ProductId)
      .then(product => res.json(product))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    Product.create(req.body)
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { product_id: ProductId } = req.params;
    Product.findByIdAndUpdate(ProductId, {
      title: req.body.title,
      price: req.body.price,
      img: req.body.img,
    })
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { product_id: ProductId } = req.params;
    Product.findByIdAndRemove(ProductId)
      .then(product => res.json(product))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
