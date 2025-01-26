const express = require("express");
const dbCon = require("./config/dbCon");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const cp = require("cookie-parser");
const dotenv = require("dotenv").config();

dbCon();
const app = express();

//middleware
app.use(express.json());
app.use(cp());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", blogRoutes);

//listen
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  // console.log(`Server is running on port: ${PORT}`);
});
