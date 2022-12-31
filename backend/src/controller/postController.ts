import { Request, Response } from "express"
import { create, findOne, findMany, deleteOne, update } from "../services/Post.services"
const createPost = async (req: Request, res: Response) => {
    await create(req.body)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
const deletePost = async (req: Request, res: Response) => {
    // TODO - check if user is authorized to delete post
    const id = req.body._id;
    await deleteOne({_id: id})
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
const updatePost = async (req: Request, res: Response) => {
    // TODO - check if user is authorized to update post
    const id: string = req.body._id;
    const body = req.body.body;
    await update({_id: id}, body)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json(err)
    })

}
const getPost = async (req: Request, res: Response) => {
    const id = req.params._id;
    await findOne({_id: id})
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
const getPosts = async (req: Request, res:Response) => {
    await findMany({})
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

export { createPost, deletePost, updatePost, getPost, getPosts };