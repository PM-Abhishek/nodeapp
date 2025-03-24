const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Base Path
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the API Base Path!" });
});

// Extension Path
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the API!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/api`);
});
