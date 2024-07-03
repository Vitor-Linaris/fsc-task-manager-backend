const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();

connectToDatabase();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}/`);
});
