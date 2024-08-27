import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.padding};
`;

const Input = styled.input`
  margin-bottom: ${(props) => props.theme.spacing.margin};
  padding: ${(props) => props.theme.spacing.padding};
  font-size: ${(props) => props.theme.typography.fontSize};
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.padding};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const PlantForm = ({ onSubmit }) => {
    const theme = useTheme();

    return (
      <form>
        <input
          type="text"
          placeholder="Feeding Schedule"
          style={{
            marginBottom: theme.spacing.margin,
            padding: theme.spacing.padding,
            fontSize: theme.typography.fontSize,
          }}
        />
        {/* Other form elements */}
      </form>
    );
  };

// const PlantForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     plantDate: '',
//     phLevel: '',
//     feedingSchedule: '',
//   });

//   const theme = useSelector(state => state.theme);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <Form theme={theme} onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Plant Name"
//         required
//       />
//       <Input
//         type="text"
//         name="type"
//         value={formData.type}
//         onChange={handleChange}
//         placeholder="Plant Type"
//       />
//       <Input
//         type="date"
//         name="plantDate"
//         value={formData.plantDate}
//         onChange={handleChange}
//         required
//       />
//       <Input
//         type="number"
//         name="phLevel"
//         value={formData.phLevel}
//         onChange={handleChange}
//         placeholder="pH Level"
//       />
//       <textarea
//         name="feedingSchedule"
//         value={formData.feedingSchedule}
//         onChange={handleChange}
//         placeholder="Feeding Schedule"
//         style={{
//           marginBottom: theme.spacing.margin,
//           padding: theme.spacing.padding,
//           fontSize: theme.typography.fontSize,
//         }}
//       ></textarea>
//       <Button theme={theme} type="submit">Add Plant</Button>
//     </Form>
//   );
// };

export default PlantForm;
