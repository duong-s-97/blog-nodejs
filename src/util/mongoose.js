module.exports = {
  // Xử lý khi api trả về nhiều Obj
  mutipleMongooseToObect: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },

  // Xử lý khi api trả về 1 Obj
  mongooseToObect: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
