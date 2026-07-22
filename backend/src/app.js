const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookiesParser = require("cookie-parser"); // reuire
const postRoutes = require("./routes/post.routes");
const app = express();
// Middleware
app.use(express.json());
app.use(cookiesParser());


module.exports = app;