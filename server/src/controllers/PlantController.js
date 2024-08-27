// server/src/controllers/PlantController.js
const db = require('../config/db');
const Joi = require('joi');

const plantSchema = Joi.object({
  name: Joi.string().min(1).required(),
  type: Joi.string().optional(),
  plantDate: Joi.date().required(),
  phLevel: Joi.number().min(3).max(10).required(),
  feedingSchedule: Joi.string().optional(),
});

exports.createPlant = async (req, res, next) => {
  try {
    const { error, value } = plantSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const result = await db.query(
      'INSERT INTO plants (name, type, plant_date, ph_level, feeding_schedule) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [value.name, value.type, value.plantDate, value.phLevel, value.feedingSchedule]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};


exports.getPlants = (req, res) => {
    // Example: Fetch plants from the database
    // Assume plants is an array of plant objects
    const plants = [
        { id: 1, name: 'Tomato', type: 'Vegetable' },
        { id: 2, name: 'Rose', type: 'Flower' },
    ];

    res.status(200).json(plants);
};

// Other controller methods can follow here...

