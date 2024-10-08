const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("Hello NodeJS!");
});

app.use("/hello", (req, res) => {
    res.send("<h1>Hello from the server!</h1>");
});

app.use("/user", (req, res) => {
    res.send({ name: "Prakash" });
});

app.listen("3000", () => {
    console.log("Server is running on port 3000...");
});
