const db = require('../config/db');

const createTracking = async (plantId, month, growthStage, issues, actionsTaken) => {
  const result = await db.query(
    'INSERT INTO monthly_tracking (plant_id, month, growth_stage, issues, actions_taken) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [plantId, month, growthStage, issues, actionsTaken]
  );
  return result.rows[0];
};

const getTrackingByPlantId = async (plantId) => {
  const result = await db.query('SELECT * FROM monthly_tracking WHERE plant_id = $1', [plantId]);
  return result.rows;
};

module.exports = {
  createTracking,
  getTrackingByPlantId,
};
