import { Router } from "express";
import * as jwt from "jsonwebtoken";
import { STATUSES } from "../../src/utils";

const router = Router();

const EXPIRE_TIME = {
  access: 86400,
  refresh: 525600,
};

const accessTkn = process.env.SECRET_TOKEN || "";
const refreshTkn = process.env.SECRET_TOKEN || "";

router.post("/auth/login", (req, res) => {
  const { body } = req;
  if (body?.email && body?.password) {
    const accessToken = jwt.sign({ id: 1 }, accessTkn, {
      expiresIn: EXPIRE_TIME.access,
    });
    const refreshToken = jwt.sign({ id: 1 }, refreshTkn, {
      expiresIn: EXPIRE_TIME.refresh,
    });
    res.send({ accessToken, refreshToken });
  }
});

router.post("/auth/refresh", async ({ body }, res) => {
  const { token } = body;
  if (!token) {
    return res.status(STATUSES.UNAUTHORIZED);
  }
  try {
    await jwt.verify(token, refreshTkn);
  } catch (error) {
    return res.sendStatus(STATUSES.FORBIDDEN);
  }
  const accessToken = jwt.sign({ id: 1 }, accessTkn, {
    expiresIn: EXPIRE_TIME.access,
  });
  res.send({ accessToken });
});

export default router;
