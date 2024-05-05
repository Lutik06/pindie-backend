const categoriesRouter = require('express').Router();

const { findAllCategories, findCategoryById, createCategory, updateCategory, checkEmptyName, } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryById, sendCreatedCategory, sendUpdatedCategory, } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.post('/categories', checkEmptyName, createCategory, sendCreatedCategory);
categoriesRouter.put('/categories/:id', checkEmptyName, updateCategory, sendUpdatedCategory);

module.exports = categoriesRouter;