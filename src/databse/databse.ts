import Mongoose from "mongoose";
import config from 'config'
import { UserModel } from "./users/user.model";

let database: Mongoose.Connection;

export const connect = () => {
  const uri: string = config.get("mongoURI")

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("connected to DB");
  });

  database.on("error", async () => {
    console.log("error connecting");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
