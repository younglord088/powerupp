const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");   
const { createProxyMiddleware } = require("http-proxy-middleware");

dotenv.config();
app.use(express.json());
app.use(cors(
));

// const proxyUrl = "http://localhost:3002";
const targetUrl = "https://www.indiawaterportal.org";

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));