const router = require('express').Router();
const { Category, Product } = require('../../models');

// const id = req.params.id; <--if I want to create a variable for id
// The `/api/categories` endpoint
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// findAll categories
// include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: {    
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
  }).then(catDat => res.json(catDat))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// find one category by its `id` value
// be sure to include its associated Products 
// https://sequelize.org/master/manual/model-querying-finders.html#-code-findone--code-
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  }).then(catDat => res.json(catDat))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// create a new category
// router.post('/Category/create', req.body.category_name);
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(catDat => { res.json(catDat)
    .catch(err => { res.status(500).json(err);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// router.put('/:id', (req, res) => {
// examples pulled from in class activities from module
router.put('/:id', (req, res) => {
  Category.update(
      {
        cateory_name: req.body.category_name
      },
      {
        where: {id: req.params.id
      },
        }).then(catDat => {
    if (!catDat) {
      res.status(404).json({ message: "No category associated with this ID!" });
      return;
    }
    res.json(catDat);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(catDat => {
    if (!catDat) {
      res.status(404).json({ message: "No category associated with this ID!" });
      return;
    }
    res.json(catDat);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
});

module.exports = router;
