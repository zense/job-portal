import mongoose,{Schema,Model, Document,model} from "mongoose";
import bcrypt from "bcryptjs";
import { HookNextFunction } from "../interfaces";

// EXAMPLE 
/*
    {
        "name": "John Doe",
        "email": "hehe1@gmail.com",
        "password": "123456",
        "age": 20,
        "access": "user",
    }
*/

interface UserInput {
    name: string;
    email: string;
    password: string;
    age: number;
}

interface IUser extends UserInput, Document {
    access: string;
    posts: string[];
    interested_posts: string[];
    comparePassword(password: string): Promise<boolean>;
}


const UserSchema:Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    access: {
        // TODO - change to enum
        type: String,
        required: true,
        default: "user",
    },
    interested_posts: {
        type: [Schema.Types.ObjectId],
        ref:"Post",
        required: true,
        default: [],
    }
});

UserSchema.pre(
    "save",
    async function(this: IUser, next: HookNextFunction) {
        // only hash the password if it has been modified or is new
        if(!this.isModified("password")) return next();

        // else hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        return next();
    }
)
UserSchema.methods.comparePassword = async function(
    password: string
): Promise<boolean> {
    const user = this;
    return bcrypt.compare(password, user.password);
}

const User: Model<IUser> = model<IUser>("User", UserSchema);
export { User, IUser, UserInput };