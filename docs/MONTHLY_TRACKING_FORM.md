# Monthly Garden Tracking Form

## Overview

This form is designed to track the ongoing progress of each plant in your garden on a monthly basis. Regular tracking allows for early identification of issues, adjustment of care routines, and overall better management of garden health.

## Form Structure

### 1. **General Information**
   - **Tracking Month**: *Dropdown* - Select the month being tracked.
   - **Plant ID**: *Numeric Input* - Unique identifier for the plant being tracked (linked to the plant database).
   - **Location**: *Text Input* - Reconfirm or update the specific garden location of the plant.

### 2. **Growth Metrics**
   - **Height**: *Numeric Input* - Current height of the plant in centimeters.
   - **Width/Spread**: *Numeric Input* - Current spread or width of the plant in centimeters.
   - **New Growth**: *Dropdown* - Rate the new growth observed (e.g., None, Moderate, Significant).

### 3. **Health and Vigor**
   - **Leaf Color**: *Dropdown* - Choose the color representing health (e.g., Deep Green, Yellowing, Browning).
   - **Pest Presence**: *Dropdown* - Report on the presence of pests (e.g., None, Mild Infestation, Severe Infestation).
   - **Disease Symptoms**: *Dropdown* - Report any signs of disease (e.g., None, Spots on Leaves, Wilting).
   - **Overall Vigor**: *Dropdown* - Rate the overall health (e.g., Strong, Average, Weak).

### 4. **Care and Maintenance**
   - **Watering Frequency**: *Dropdown* - Indicate how often the plant was watered this month (e.g., Daily, Biweekly, Weekly).
   - **Fertilizer Applied**: *Text Input* - Detail the type and amount of fertilizer used, if any.
   - **Pruning/Trimming**: *Text Area* - Record any pruning or trimming done this month.

### 5. **Observations and Actions**
   - **Noted Issues**: *Text Area* - Record any issues or anomalies observed.
   - **Actions Taken**: *Text Area* - Detail any corrective actions or maintenance activities performed.

## Data Validation

- **Height and Width**: Must be positive integers.
- **Leaf Color and Pest Presence**: Required fields for comprehensive tracking.
- **Plant ID**: Must correspond to an existing plant in the database.

## Example Form Submission

```json
{
  "trackingMonth": "April 2024",
  "plantId": 101,
  "location": "Bed 3, Row 2",
  "height": 40,
  "width": 30,
  "newGrowth": "Moderate",
  "leafColor": "Deep Green",
  "pestPresence": "None",
  "diseaseSymptoms": "None",
  "overallVigor": "Strong",
  "wateringFrequency": "Weekly",
  "fertilizerApplied": "10-10-10 Organic, 100g",
  "pruningTrimming": "Removed lower leaves",
  "notedIssues": "None",
  "actionsTaken": "Regular maintenance"
}
```
