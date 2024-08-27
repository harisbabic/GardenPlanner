import React from 'react';
import { useDispatch } from 'react-redux';
import PlantForm from '../components/PlantForm';
import { addPlant } from '../redux/actions/plantActions';

const PlantFormContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = (plantData) => {
    dispatch(addPlant(plantData));
  };

  return <PlantForm onSubmit={handleSubmit} />;
};

export default PlantFormContainer;
