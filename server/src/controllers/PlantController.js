// server/src/controllers/PlantController.js
const PlantModel = require('../models/Plant');
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
    const result = await PlantModel.createPlant(
      value.name,
      value.type,
      value.plantDate,
      value.phLevel,
      value.feedingSchedule
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getPlants = async (req, res) => {
  try {
    const plants = await PlantModel.getPlants();
    res.status(200).json(plants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plants' });
  }
};
