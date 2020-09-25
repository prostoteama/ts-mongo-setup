import {IUserDocument, IUserModel} from './user.types'

export async function findOrCreate(this:IUserModel, userId: number): Promise<IUserDocument> {
    const record = await this.findOne({_id: userId})
    if (record) {
        return record
    } else {
        return this.create({age: 0, firstName: 'Empty', lastName: 'Empty'})
    }
}

export async function findByAge(this:IUserModel, min?: number, max?: number): Promise<IUserDocument[]> {
    // return this.where('age').gte(min = 0).lte(max = Infinity)
    return this.find({age: {$gte: min || 0, $lte: max || Infinity}})
}