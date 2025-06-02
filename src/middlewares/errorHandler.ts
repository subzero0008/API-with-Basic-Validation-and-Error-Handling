import { ErrorRequestHandler } from 'express';

// Global error handling middleware
// Catches any errors passed down the middleware chain
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Log the full error stack to the console for debugging
  console.error(err.stack);
  // Send a generic 500 Internal Server Error response to the client
  res.status(500).json({ message: 'Internal Server Error' });
};
