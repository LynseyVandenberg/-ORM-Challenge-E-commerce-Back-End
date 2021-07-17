const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// https://expressjs.com/en/guide/routing.html

////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just `Product.id`
      include: [Product.id] //model.attribute
    }).then(catDat => {res.json(catDat);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just `db.Post`
      include: [Product.category_id]
    }).then(catDat => {res.json(catDat);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body.category_name).then(catDat => {
    res.json(catDat);
  });
});
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
