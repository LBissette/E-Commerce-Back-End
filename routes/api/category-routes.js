const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll
  // be sure to include its associated Products
  ({
    include: [{ model: Product }],
  });
  res.status(200).json(categoryData);
  res.status(500).json(err);

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  Category.findByPk()
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
  // Create new category
    const categoryData = await Category.create({
      reader_id: req.body.product_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
