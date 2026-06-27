const express = require("express");
const app = express();

const PORT = 3000; // You can change this if needed

app.get("/", (req, res) => {
  res.send("Hello, world! Your server is running 🎉");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
