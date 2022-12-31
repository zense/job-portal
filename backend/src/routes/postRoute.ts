import { Router } from "express";
import { createPost, deletePost, updatePost, getPost, getPosts } from "../controller/postController"

const router: Router = Router();

router.route("/create")
.post(createPost)
.put(updatePost)

router.route("/delete")
.delete(deletePost);

router.route("/")
.get(getPosts);

router.route("/:_id")
.get(getPost);


export default router;