const config = require('config-yml');
const server = require('./src/server/index');
const magic = require('./src/utils/magic');

server.listen(config.port, () => {
  magic.LogInfo(`Server running on port http://localhost:${config.port}`);
});

server.on('error', (err) => {
  magic.LogDanger(err);
});
