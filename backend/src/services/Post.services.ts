import { CreateQuery, FilterQuery, QueryFindBaseOptions } from "mongoose";
import { Post, IPost, PostInput } from "../models/Post";

export async function create(input: CreateQuery<PostInput>) {
    return Post.create<PostInput>(input);
}

export async function findOne(
    query: FilterQuery<IPost>
){
    return Post.findOne(query);
}

export async function findMany(
    query: FilterQuery<IPost>,

){
    return Post.find(query)
}
export async function deleteOne(
    query: FilterQuery<IPost>
){
    return Post.findByIdAndDelete(query)
}

export async function update(
    query: FilterQuery<IPost>,
    update: IPost
){
    return Post.findByIdAndUpdate(query, update);
}