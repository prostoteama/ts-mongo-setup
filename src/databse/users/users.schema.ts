import { Schema } from "mongoose";
import { sameLastName, setLastUpdate } from "./user.methods";
import { findByAge, findOrCreate } from "./users.statics";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfEntery: {
    type: Date,
    default: new Date(),
  },
  lastUpdate: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.statics.findByAge = findByAge;
UserSchema.statics.findOrCreate = findOrCreate;

UserSchema.methods.setLastUpdate = setLastUpdate;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
