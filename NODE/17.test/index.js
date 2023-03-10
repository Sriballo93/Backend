const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const server = require("./app.js");

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = server;
