const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: "*"
}));

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// Routes
require("./app/routes/turorial.routes")(app);

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
