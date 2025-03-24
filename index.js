const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from Railway!" });
});

// Listen on 0.0.0.0 to allow external access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
