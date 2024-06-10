import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Define a state variable for the custom message
  const [customMessage, setCustomMessage] = useState('');

   // Use useEffect to fetch the message from the backend when the component mounts
  useEffect(() => {
    const fetchMessage = async () => {
      try {

        // Make a GET request to the backend endpoint
        const response = await axios.get('/api/message');

        // Update/change the state with the fetched message
        setCustomMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching the message:', error);
      }
    };
// Call the fetchMessage()
    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>Welcome Message</h1>
      <p>Hello this is Janki's Frontend</p>
      <h2>This is janki's full stack web app</h2>
      <p>{customMessage}</p>
    </div>
  );
}

export default App;
