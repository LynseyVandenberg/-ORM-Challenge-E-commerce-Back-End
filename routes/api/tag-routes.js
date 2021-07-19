const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
/////////////////////////////////////////////////////////////////////////////////
// findAll tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include:
      {
        model: Product,
        attributes: ['product_name', 'stock', 'price', 'category_id']
      },
  }).then(tagDat => res.json(tagDat))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/////////////////////////////////////////////////////////////////////////////////
// findOne tag by id and include the product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include:
      {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id'] 
      }
  }).then(tagDat => {
    if (!tagDat) {
      res.status(404).json({ message: 'No tag associated with this ID!'}); 
      return; 
    }
    res.json(tagDat);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/////////////////////////////////////////////////////////////////////////////////
// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  }).then(tagDat => { res.json(tagDat)
    .catch(err => { res.status(500).json(err);
    });
});

/////////////////////////////////////////////////////////////////////////////////
// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
      {
        id: req.params.id
      },
      {
        where: {
          id: req.params.id
        },
      }).then((tagDat) => {
        if (!tagDat) {
          res.status(404).json({ message: 'No tag associated with this ID!'}); 
          return; 
        }
        res.json(tagDat);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

/////////////////////////////////////////////////////////////////////////////////
// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tagDat => {
    if (!tagDat) {
      res.status(404).json({ message: "No tag associated with this ID!" });
      return;
    }
    res.json(tagDat);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
});

module.exports = router;
