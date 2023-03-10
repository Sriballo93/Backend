const conn = require('../repositories/mongo.repository');

exports.getAll = async () => {
  try {
    return await conn.db.connMongo.Character.find();
  } catch (error) {
    console.log(' err odm-character.getAll = ', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Name, Status, Town) => {
  try {
    const data = await new conn.db.connMongo.Character({
      name: Name,
      status: Status,
      town: Town,
    });
    data.save();
    return true;
  } catch (error) {
    console.log(' err odm-character.Create= ', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Delete = async (id) => {
  try {
    return await conn.db.connMongo.Character.findByIdAndDelete(id);
  } catch (error) {
    console.log(' err odm-character.Delete = ', error);
    return await { err: { code: 123, message: error } };
  }
};
