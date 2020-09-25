import { Document } from "mongoose";
import { IUserDocument } from "./user.types";

export async function setLastUpdate(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdate || this.lastUpdate < now) {
    this.lastUpdate = now;
    this.save();
  }
}

export async function sameLastName(this:IUserDocument): Promise<Document[]> {
    return this.model('user').find({lastName: this.lastName})
}