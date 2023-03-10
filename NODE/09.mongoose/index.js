const express = require("express");

require("./db");
const PORT = 3000;

const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
