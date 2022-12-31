import { CreateQuery, FilterQuery, QueryFindBaseOptions } from "mongoose";
import { User, IUser, UserInput } from "../models/User";

// UserInput = UserInput
// IUser = UserDocument

export async function createUser(input: CreateQuery<UserInput>) {
    return User.create<UserInput>(input);
}

export async function findUser(
    query: FilterQuery<IUser>,
) {
    return User.findOne(query);
}

export async function loginUser({
  email,
  password,
}: {
  email: IUser["email"];
  password: IUser["password"];
}){
    const user = await findUser({email});
    if(!user) {
        throw new Error("User not found");
    }
    return user.comparePassword(password);
}
