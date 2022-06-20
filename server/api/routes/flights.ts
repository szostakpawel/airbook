import { Router } from "express";
import { STATUSES } from "../../src/utils";
import useFlight from "../../integrations/flight";

const router = Router();

router.get("/flights", async (req, res) => {
  try {
    const flights = await useFlight.getAllFlights();
    return res.json(flights);
  } catch (error) {
    return res.status(STATUSES.INTERNAL_SERVER_ERROR).json(error);
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
      return res.status(STATUSES.BAD_REQUEST);
    }
  } catch (error) {
    return res.status(STATUSES.INTERNAL_SERVER_ERROR).json(error);
  }
});

export default router;
