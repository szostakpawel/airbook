import { json, urlencoded } from "body-parser";
import { Application } from "express";
import express = require("express");
import router from "../api";

const app: Application = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
