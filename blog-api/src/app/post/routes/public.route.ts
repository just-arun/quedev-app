import { Router } from "express";
import { PostController } from "../controller/post";

const PostPublicRoute = Router();
const controller = new PostController();
PostPublicRoute.get("/", controller.getAll);
PostPublicRoute.get("/:link", controller.getOneRendered);

export default PostPublicRoute;
