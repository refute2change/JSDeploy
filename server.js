const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

console.log(process.env); // "239482"

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});