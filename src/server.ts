import app from './app';

// Define the port to run the server on (default is 3000)
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
