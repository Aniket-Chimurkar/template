
const express = require("express");
const indexRoute = require("./src/router");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

app.use(
  rateLimit({
    windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
    max: 5,
    message: "You exceeded 100 requests in 12 hour limit!",
    headers: true,
  })
);

app.use("/posts", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});