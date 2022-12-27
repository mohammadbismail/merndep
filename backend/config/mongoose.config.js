const mongoose = require("mongoose");
mongoose
  .set("strictQuery", true)
  .connect("mongodb://127.0.0.1/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
