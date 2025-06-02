import { Router } from 'express';
import * as itemsController from '../controllers/items';

const router = Router();

// Route to get all items
router.get('/', itemsController.getAllItems);

// Route to get a single item by ID
router.get('/:id', itemsController.getItem);

// Route to create a new item
router.post('/', itemsController.createItem);

// Route to update an existing item by ID
router.put('/:id', itemsController.updateItem);

// Route to delete an item by ID
router.delete('/:id', itemsController.deleteItem);

export default router;
