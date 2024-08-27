# Planting and Growth Tracking Form

## Overview

This form is designed to track the planting and growth progress of each plant in your garden. The information collected will help monitor plant health, soil conditions, and growth stages, ensuring that your garden thrives throughout the growing season.

## Form Structure

### 1. **Plant Details**
   - **Plant Name**: *Text Input* - The common name or species of the plant (e.g., Tomato, Basil).
   - **Plant Type**: *Dropdown* - Select the type of plant (e.g., Vegetable, Herb, Flower).
   - **Planting Date**: *Date Picker* - The date when the plant was planted.
   - **Planting Location**: *Text Input* - Specific location within the garden (e.g., Bed 3, Row 2).

### 2. **Soil Conditions**
   - **pH Level**: *Numeric Input* - The pH level of the soil at the planting location.
   - **Soil Type**: *Dropdown* - Select the type of soil (e.g., Loam, Clay, Sandy).
   - **Soil Moisture**: *Dropdown* - Select the moisture level (e.g., Dry, Moist, Wet).

### 3. **Growth Progress**
   - **Current Growth Stage**: *Dropdown* - Select the current stage of growth (e.g., Seedling, Vegetative, Flowering).
   - **Height**: *Numeric Input* - Current height of the plant in centimeters.
   - **Health Status**: *Dropdown* - Select the overall health status (e.g., Healthy, Wilting, Pest-Infested).

### 4. **Feeding and Watering**
   - **Last Watered**: *Date Picker* - The last date the plant was watered.
   - **Feeding Schedule**: *Dropdown* - Frequency of feeding (e.g., Weekly, Biweekly).
   - **Fertilizer Type**: *Dropdown* - Type of fertilizer used (e.g., Organic, Synthetic).

### 5. **Observations and Issues**
   - **Issues Noted**: *Text Area* - Record any issues observed (e.g., Yellow leaves, Pest damage).
   - **Actions Taken**: *Text Area* - Record any actions taken to address issues (e.g., Added fertilizer, Pruned affected leaves).

## Data Validation

- **Plant Name and Location**: Required fields.
- **pH Level**: Must be a numeric value between 3.0 and 10.0.
- **Height**: Must be a positive integer.

## Example Form Submission

```json
{
  "plantName": "Tomato",
  "plantType": "Vegetable",
  "plantingDate": "2024-04-01",
  "plantingLocation": "Bed 3, Row 2",
  "pHLevel": 6.5,
  "soilType": "Loam",
  "soilMoisture": "Moist",
  "currentGrowthStage": "Vegetative",
  "height": 30,
  "healthStatus": "Healthy",
  "lastWatered": "2024-04-10",
  "feedingSchedule": "Weekly",
  "fertilizerType": "Organic",
  "issuesNoted": "None",
  "actionsTaken": "Regular watering and fertilizing"
}
```
