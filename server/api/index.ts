import { Router } from "express";
import flights from "./routes/flights";

const router = Router();

router.use("/api", [flights]);

export default router;
