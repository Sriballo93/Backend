const conn = require('../repositories/mongo.repository');

exports.getAll = async () => {
  try {
    return await conn.db.connMongo.Show.find().populate('characters');
  } catch (error) {
    console.log(' err odm-show.getAll = ', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Name, Characters) => {
  try {
    const data = await new conn.db.connMongo.Show({
      name: Name,
      characters: Characters,
    });
    data.save();
    return true;
  } catch (error) {
    console.log(' err odm-show.Create= ', error);
    return await { err: { code: 123, message: error } };
  }
};
