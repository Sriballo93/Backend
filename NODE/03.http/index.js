const http = require("http");
const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.writeHead(200);
    res.end("<h1>Welcome to the home page</h1>");
  } else if (req.url === "/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ name: "John", age: 30 }));
  } else if (req.url === "/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      fs.writeFile("users.txt", JSON.stringify(user), (err) => {
        if (err) throw err;
        res.writeHead(201);
        res.end("User created");
      });
    });
  } else {
    res.writeHead(404);
    res.end("404 Not found");
  }
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is started in http://localhost:${PORT}`);
});
