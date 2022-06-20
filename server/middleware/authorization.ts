import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { STATUSES } from "../src/utils";

const accessTkn = process.env.SECRET_TOKEN || "";

export const authorization = (
  req: Request & { user?: string | JwtPayload },
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) {
    return res.sendStatus(STATUSES.UNAUTHORIZED);
  } else {
    jwt.verify(token, accessTkn, (error, user) => {
      if (error) {
        return res.sendStatus(STATUSES.FORBIDDEN);
      } else {
        req.user = user;
        next();
      }
    });
  }
};
