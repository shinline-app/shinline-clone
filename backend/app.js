const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cors());

app.use("/api/users/v1", userRoutes);

module.exports = app;
