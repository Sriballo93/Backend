const config = require('config-yml');
const mongoose = require('mongoose');
const magic = require('../../utils/magic');
const character = require('../entities/entity-character');
const show = require('../entities/entity-show');
const dotenv = require('dotenv');

dotenv.config();

let db = {};

if (config.db.mongodb && config.db.mongodb.length > 0) {
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db[c.nameconn] = {};
    db[c.nameconn].conn = mongoose;
    db[c.nameconn].Character = character(mongoose);
    db[c.nameconn].Show = show(mongoose);
  });
  exports.db = db;
  magic.LogInfo('Conected to db');
} else {
  magic.LogDanger('Db dont exist');
}
