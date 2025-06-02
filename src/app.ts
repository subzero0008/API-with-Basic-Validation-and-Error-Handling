import express from 'express';
import itemsRouter from './routes/items';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root route for basic health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Items API is running. Use /items endpoints.' });
});

// Routes for handling /items endpoints
app.use('/items', itemsRouter);

// Global error handler middleware
app.use(errorHandler);

export default app;
