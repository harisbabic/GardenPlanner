export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

export const addPlant = (plantData) => ({
  type: ADD_PLANT,
  payload: plantData,
});

export const removePlant = (plantId) => ({
  type: REMOVE_PLANT,
  payload: plantId,
});
