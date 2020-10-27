
const express = require("express");
const app = express();


app.use(express.json());

const log = (req, res, next) => {
    const { method, url } = req;
    const logger = `Method:[${method}] URL:${url} Port:${port}`;
    console.log(logger);
    next();
  };
  
  app.use(log);

app.use("/", require("./src/router.js"));

const port = 3333

app.listen(process.env.PORT, () => {
  console.log(`server started! ${process.env.PORT} 👀 `);
});

