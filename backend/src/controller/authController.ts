import { Request, Response } from "express"
import { findUser, createUser, loginUser } from "../services/User.services";
const signup = async (req: Request, res: Response) => {
    await createUser(req.body)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
const login = async (req: Request, res: Response) => {
    await loginUser(req.body)
    .then(user => {
        if(user){
            findUser({email: req.body.email})
            .then(user => {
                if(user){
                    const toSend = {
                        email: user.email,
                        name: user.name,
                        _id: user._id,
                        age: user.age,
                        access: user.access
                    }
                    res.status(200).json(toSend)
                }else{
                    res.status(404).json({message: "User not found"})
                }
            })
        }else{
            res.status(404).json({message: "Invaid credentials"})
        }
    })
    .catch(err => {
        if(err.message == "User not found"){
            res.status(404).json({
                message: err.message
            });
        }else{
            res.status(500).json({
                message: err.message
            })
        }
    })
}
export {
    signup,
    login
}