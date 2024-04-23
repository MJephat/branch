const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const chatRoute = require("./Routes/chatRoute.js")
const MessageRoute = require("./Routes/MessageRoute.js");
const UserRoute = require("./Routes/UserRoute.js");
const AuthRoute = require("./Routes/AuthRoute.js");



dotenv.config();
connectDB();
const app = express();


app.use(express.json());

app.use('/api/auth', AuthRoute);
app.use("/api/chat", chatRoute);
app.use('/api/message', MessageRoute);
app.use("/api/user", UserRoute);



const PORT = process.env.Port || 8000;
app.listen(PORT, console.log(`server started on port ${PORT}!`));