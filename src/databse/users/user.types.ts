import { Document, Model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  dateOfEntery?: Date;
  lastUpdate?: Date;
}

export interface IUserDocument extends IUser, Document {
  setLastUpdate: (this: IUserDocument) => Promise<void>;
  sameLastName: (this: IUserDocument) => Promise<Document[]>;
}
export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (this: IUserModel, userId: number) => Promise<IUserDocument>;
  findeByAge: (
    this: IUserModel,
    min?: number,
    max?: number
  ) => Promise<IUserDocument[]>;
}
