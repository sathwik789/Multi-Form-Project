const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const data = req.body;

  fs.readFile("data.json", "utf8", (err, fileData) => {
    let existing = [];
    if (!err && fileData) {
      try {
        existing = JSON.parse(fileData);
      } catch (parseErr) {
        console.error("JSON parse error:", parseErr);
      }
    }

    existing.push(data);

    fs.writeFile("data.json", JSON.stringify(existing, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Write error:", writeErr);
        return res.status(500).json({ message: "Error saving data." });
      }
      res.status(200).json({ message: "Data saved successfully." });
    });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
