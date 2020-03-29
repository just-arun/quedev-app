import { NextFunction, Response, Request } from "express";
import { ErrorClass } from "./errorClass";
import { HttpStatus } from "../util/serverStatus";

export const ErrorHandle = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log(err.name);
  return res.status(HttpStatus(err.name)).json({ error: { message: err.message } });
};
