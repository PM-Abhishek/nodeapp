const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Base path `/mockup`
app.get("/mockup", (req, res) => {
  res.json({ message: "Mockup API is working!" });
});

// Extension path `/mockup/test`
app.get("/mockup/test", (req, res) => {
  res.json({ message: "Hello from Mockup API!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
