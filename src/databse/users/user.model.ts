import {model} from 'mongoose'
import {IUserDocument} from './user.types'
import UserSchema from './users.schema'

export const UserModel = model<IUserDocument>('user', UserSchema)