import express from "express";
import { connect } from "./databse/databse";
import { UserModel } from "./databse/users/user.model";

const app = express();
const PORT = 5002;

(async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
})();


app.get('/', (req, res) => {
  UserModel.find({}).then(resp => res.json(resp))
})

