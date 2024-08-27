const db = require('../config/db');

const createPlant = async (name, type, plantDate, phLevel, feedingSchedule) => {
  const result = await db.query(
    'INSERT INTO plants (name, type, plant_date, ph_level, feeding_schedule) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, type, plantDate, phLevel, feedingSchedule]
  );
  return result.rows[0];
};

const getPlants = async () => {
  const result = await db.query('SELECT * FROM plants');
  return result.rows;
};

module.exports = {
  createPlant,
  getPlants,
};
