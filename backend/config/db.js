const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://alen:alen@cluster0.xblyz.mongodb.net/authDataBase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  );

  console.log("MongoDB Connected");
};

module.exports = connectDB;
