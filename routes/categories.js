const categoriesRouter = require('express').Router();

const { findAllCategories,
    checkIfCategoriesAvaliable,
    findCategoryById,
    createCategory,
    updateCategory,
    checkEmptyName,
    deleteCategory,
    checkIsCategoryExists,
} = require('../middlewares/categories');
const { sendAllCategories,
    sendCategoryById,
    sendCreatedCategory,
    sendUpdatedCategory,
    sendCategoryDeleted,
} = require('../controllers/categories');



categoriesRouter.get('/categories',
    findAllCategories,
    sendAllCategories
);
categoriesRouter.get('/categories/:id',
    findCategoryById,
    sendCategoryById
);
categoriesRouter.post('/categories',
    checkEmptyName,
    findAllCategories,
    checkIsCategoryExists,
    createCategory,
    sendCreatedCategory
);
categoriesRouter.put('/categories/:id',
    checkEmptyName,
    updateCategory,
    sendUpdatedCategory
);
categoriesRouter.delete("/categories/:id",
    deleteCategory,
    sendCategoryDeleted
);

module.exports = categoriesRouter;