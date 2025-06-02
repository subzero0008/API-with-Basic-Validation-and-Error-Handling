import { v4 as uuidv4 } from 'uuid';

// Interface representing an item
interface Item {
  id: string;
  name: string;
}

// Initial array of items with sample data
let items: Item[] = [
  { id: uuidv4(), name: 'Sample Item 1' },
  { id: uuidv4(), name: 'Sample Item 2' }
];

// Returns all items
export const getItems = (): Item[] => items;

// Finds an item by its ID, returns undefined if not found
export const getItemById = (id: string): Item | undefined => 
  items.find(item => item.id === id);

// Adds a new item with a generated UUID and given name
export const addItem = (name: string): Item => {
  const newItem: Item = {
    id: uuidv4(),
    name
  };
  items.push(newItem);
  return newItem;
};

// Updates the name of an existing item by ID
// Throws an error if the item does not exist
export const updateItem = (id: string, name: string): Item => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Item not found');
  }
  items[index].name = name;
  return items[index];
};

// Deletes an item by ID
// Throws an error if the item does not exist
export const deleteItem = (id: string): void => {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error('Item not found');
  }
  items = items.filter(item => item.id !== id);
};
