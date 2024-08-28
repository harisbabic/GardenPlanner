# TABLES.md

## Purpose
This document provides a reference for the database tables used in the GardenPlanner project. It includes definitions, relationships, and any special considerations for managing the data.

## Table of Contents
1. [Plant Table](#1-plant-table)
2. [Garden Table](#2-garden-table)
3. [User Table](#3-user-table)
4. [Maintenance Table](#4-maintenance-table)
5. [Harvest Table](#5-harvest-table)
6. [Relationships and Constraints](#6-relationships-and-constraints)

## 1. Plant Table
**Purpose:** Stores information about the individual plants in the garden.

### Columns:
- **ID:** Primary key, unique identifier for each plant.
- **Name:** The common name of the plant.
- **Scientific Name:** The scientific name of the plant.
- **Plant Date:** The date the plant was added to the garden.
- **Location:** The location of the plant within the garden.
- **Health Status:** A rating of the plant’s health.

## 2. Garden Table
**Purpose:** Contains details about the different gardens or zones within the project.

### Columns:
- **ID:** Primary key, unique identifier for each garden.
- **Name:** The name of the garden or zone.
- **Size:** The size of the garden area.
- **Location:** The general location of the garden.
- **Soil Type:** The type of soil in the garden area.

## 3. User Table
**Purpose:** Manages user information and access rights within the GardenPlanner project.

### Columns:
- **ID:** Primary key, unique identifier for each user.
- **Username:** The user’s chosen username.
- **Email:** The user’s email address.
- **Role:** The user’s role in the project (e.g., Admin, Gardener).
- **Password Hash:** The hashed password for secure authentication.

## 4. Maintenance Table
**Purpose:** Logs all maintenance activities performed within the garden.

### Columns:
- **ID:** Primary key, unique identifier for each maintenance record.
- **Plant ID:** Foreign key linking to the Plant Table.
- **Activity:** The type of maintenance performed (e.g., watering, fertilizing).
- **Date:** The date the maintenance was performed.
- **Notes:** Any additional notes about the maintenance activity.

## 5. Harvest Table
**Purpose:** Tracks the yield from the garden, recording harvest details for each plant.

### Columns:
- **ID:** Primary key, unique identifier for each harvest record.
- **Plant ID:** Foreign key linking to the Plant Table.
- **Harvest Date:** The date the harvest took place.
- **Quantity:** The amount of produce harvested.
- **Quality:** A rating of the harvest’s quality.

## 6. Relationships and Constraints
**Purpose:** Defines the relationships between tables and any constraints that must be observed.

### Key Relationships:
- **Plant to Garden:** Each plant belongs to one garden, creating a one-to-many relationship between the Garden Table and the Plant Table.
- **User to Maintenance:** Each maintenance activity is logged by a user, creating a one-to-many relationship between the User Table and the Maintenance Table.
- **Plant to Harvest:** Each harvest record is linked to a specific plant, creating a one-to-many relationship between the Plant Table and the Harvest Table.

### Constraints:
- **Foreign Keys:** Ensure that all foreign key relationships are maintained to preserve data integrity.
- **Unique Constraints:** Apply unique constraints where necessary to prevent duplicate records.
- **Not Null Constraints:** Ensure that critical fields (e.g., Plant Name, Harvest Date) are not left blank.

## Table 1: Optimal Planting Times

| Plant Name  | Planting Season | Ideal Temperature (°C) | Direct Seed or Transplant |
|-------------|-----------------|------------------------|---------------------------|
| Tomato      | Spring          | 18-24                   | Transplant                |
| Basil       | Spring/Summer   | 20-25                   | Direct Seed               |
| Lettuce     | Spring/Fall     | 10-18                   | Direct Seed               |
| Carrot      | Spring/Fall     | 7-24                    | Direct Seed               |
| Pumpkin     | Summer          | 20-35                   | Direct Seed               |

## Table 2: Soil pH Levels

| Plant Name  | Optimal pH Range |
|-------------|------------------|
| Tomato      | 6.0 - 6.8        |
| Basil       | 6.0 - 7.5        |
| Lettuce     | 6.0 - 7.0        |
| Carrot      | 5.5 - 7.0        |
| Pumpkin     | 6.0 - 6.8        |

## Table 3: Feeding Schedule

| Plant Name  | Feeding Frequency | Recommended Fertilizer Type    |
|-------------|-------------------|--------------------------------|
| Tomato      | Every 2 weeks     | 10-10-10 NPK, Organic Compost   |
| Basil       | Every 3 weeks     | Balanced NPK, Liquid Seaweed    |
| Lettuce     | Monthly           | Organic Compost, Blood Meal     |
| Carrot      | Monthly           | Low Nitrogen, High Phosphorus   |
| Pumpkin     | Every 2 weeks     | High Nitrogen Early, Balanced Later |

## Table 4: Garden Tools and Supplies

| Tool/Supply  | Purpose                       | Recommended Brand/Type        |
|--------------|-------------------------------|--------------------------------|
| Spade        | Digging and soil turning       | Fiskars Steel D-Handle         |
| Pruners      | Trimming plants and branches   | Felco F-2 Classic              |
| Watering Can | Manual watering of plants      | Haws Heritage                  |
| Compost      | Soil enrichment                | Black Kow Manure Compost       |

## Data Integrity and Updates

- **Source Verification**: All data is sourced from reliable agricultural guides and verified by expert gardeners.
- **Updates**: The tables should be reviewed and updated annually to reflect the latest best practices in gardening.
