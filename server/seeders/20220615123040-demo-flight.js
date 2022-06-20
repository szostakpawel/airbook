module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("flights", [
      {
        plane: "AirAsia",
        distance: 4100,
        capacity: 254,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("flights", null, {});
  },
};
