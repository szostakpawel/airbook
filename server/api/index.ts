import flights from "./routes/flights";
// import users from "./routes/users";
import auth from "./routes/auth";
import { Router } from "express";

const router = Router();

router.use("/api", [flights, auth]);

export default router;
