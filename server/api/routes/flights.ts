import { Router } from "express";
import useFlight from "../../integrations/flight";

const router = Router();

router.get("/flights", async (req, res) => {
  try {
    const flights = await useFlight.getAllFlights();
    return res.json(flights);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/flights", async (req, res) => {
  try {
    const { body } = req;
    if (body?.plane && body?.capacity && body?.distance) {
      const flight = await useFlight.insertFlight({
        plane: body.plane,
        capacity: body.capacity,
        distance: body.distance,
      });
      return res.json(flight);
    } else {
      return res.status(400);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
