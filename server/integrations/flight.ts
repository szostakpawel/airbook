import { sequelize } from ".";
import { DataTypes } from "sequelize";

import { IFlight } from "../src/types";

const Flight = sequelize.define("flight", {
  plane: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const useFlight = {
  insertFlight: async ({ plane, capacity, distance }: IFlight) => {
    return await Flight.create({ plane, capacity, distance });
  },
  getAllFlights: async () => {
    return await Flight.findAll();
  },
};

export default useFlight;
