// Import the express module
const express = require('express');

// Createing an express application
const app = express();

// Define a GET endpoint @ /api/message
app.get('/api/message', (req, res) => {
  // Define a custom message
  const customMessage = "Hello, this is Janki's Server from the backend!";
  
  // Sending the custom message as a JSON response
  res.json({ message: customMessage });
});

// Specify the port number the server will listen on because cant use 3000
const PORT = process.env.PORT || 5000;

// Start the server and log the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
