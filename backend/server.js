const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB is healthy and running 😀");
  })
  .catch(() => {
    console.log("Db is not healthy and there is an error 💥");
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
