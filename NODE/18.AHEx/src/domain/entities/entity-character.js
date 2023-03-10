module.exports = (db) => {
  const characterSchema = new db.Schema(
    {
      name: String,
      status: String,
      town: String,
    }
    // {
    //   timestamps: {
    //     createdAt: 'created_at',
    //     updateAt: 'updated_at',
    //   },
    // }
  );
  return db.model('Character', characterSchema);
};
