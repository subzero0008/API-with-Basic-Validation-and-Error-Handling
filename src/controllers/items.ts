import { Request, Response, NextFunction } from 'express';
import * as itemService from '../models/item';

// Handler to get all items
export const getAllItems = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const items = itemService.getItems();
    res.status(200).json(items);
  } catch (error) {
    next(error); // Pass unexpected errors to global error handler
  }
};

// Handler to get a single item by ID
export const getItem = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const item = itemService.getItemById(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' }); // Item not found
      return;
    }
    res.status(200).json(item);
  } catch (error) {
    next(error); // Pass unexpected errors to global error handler
  }
};

// Handler to create a new item
export const createItem = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { name } = req.body;
    // Validate that 'name' is provided in the request body
    if (!name) {
      res.status(400).json({ message: 'Name is required' });
      return;
    }
    
    const newItem = itemService.addItem(name);
    res.status(201).json(newItem); // Return created item with 201 status
  } catch (error) {
    next(error); // Pass unexpected errors to global error handler
  }
};

// Handler to update an existing item by ID
export const updateItem = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    
    // Validate that 'name' is provided in the request body
    if (!name) {
      res.status(400).json({ message: 'Name is required' });
      return;
    }
    
    const updatedItem = itemService.updateItem(id, name);
    res.status(200).json(updatedItem);
  } catch (error: any) {
    // Handle case when item to update is not found
    if (error.message === 'Item not found') {
      res.status(404).json({ message: error.message });
      return;
    }
    next(error); // Pass unexpected errors to global error handler
  }
};

// Handler to delete an item by ID
export const deleteItem = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { id } = req.params;
    itemService.deleteItem(id);
    res.status(204).send(); // No content on successful deletion
  } catch (error: any) {
    // Handle case when item to delete is not found
    if (error.message === 'Item not found') {
      res.status(404).json({ message: error.message });
      return;
    }
    next(error); // Pass unexpected errors to global error handler
  }
};
