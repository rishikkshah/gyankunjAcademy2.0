const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/gyankunjAcademy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB successfully connected!"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
