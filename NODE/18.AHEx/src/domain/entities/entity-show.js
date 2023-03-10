module.exports = (db) => {
  const showSchema = new db.Schema(
    {
      name: String,
      description: String,
      characters: [{ type: db.Types.ObjectId, ref: 'Character' }],
    }
    // {
    //   timestamps: {
    //     createdAt: 'created_at',
    //     updateAt: 'updated_at',
    //   },
    // }
  );
  return db.model('Show', showSchema);
};
