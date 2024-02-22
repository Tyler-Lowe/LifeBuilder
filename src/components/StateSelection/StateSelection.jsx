import * as React from 'react';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function StateSelection() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedMajorSalary, setSelectedMajorSalary] = useState(null);
  const [selectedMajorDescription, setSelectedMajorDescription] = useState(null);

  // Fetch state names from the database
  useEffect(() => {
    dispatch({ type: 'FETCH_STATE_NAME' });
  }, [dispatch]);

  // Fetch college name from database
  useEffect(() => {
    if (selectedState)
      dispatch({ type: 'FETCH_COLLEGE_NAME', payload: selectedState });
  }, [selectedState, dispatch]);

  // Fetch college major from database
  useEffect(() => {
    if (selectedCollege)
      dispatch({ type: 'FETCH_COLLEGE_MAJOR', payload: selectedCollege });
  }, [selectedCollege, dispatch]);

  console.log(selectedMajorSalary, 'HERE IS SALARY TYLER LOWE')

  // This stores all the states that were fetched from the db
  const stateNames = useSelector((store) => store.stateName);
  const collegeNames = useSelector((store) => store.collegeName);
  const collegeMajors = useSelector((store) => store.collegeMajor);

  console.log(selectedState, selectedCollege, selectedMajor, selectedMajorSalary, selectedMajorDescription, 'Tyler state here?? IS THE STATE DUDE');

  // Filter for unique state names and sort a-z
  const uniqueStateNames = stateNames
  .filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.state_name === item.state_name // Adjust this line
    ))
  )
  .sort((a, b) => a.state_name.localeCompare(b.state_name)); // Adjust this line


  // event handler for when a state is selected from the menu it will store that selection 
  // and the state array will change which will fire the "FETCH-COLLEGE-NAME" useEffect hook
  const handleChange = (event) => {
    setSelectedState(event.target.value)
  };

  // This event handler stores the selected college that the user selected
  const handleChangeCollege = (event) => {
    setSelectedCollege(event.target.value)
  };

  const handleChangeMajor = (event) => {
    setSelectedMajor(event.target.value)
  };

  //
  const handleSubmit = async () => {
    await dispatch({  type: 'SET_USER_SELECTIONS', payload: {  selectedState, selectedCollege, selectedMajor, selectedMajorSalary, selectedMajorDescription}  })
    history.push('/future-preview')
  }

  const menuItems = uniqueStateNames.map((item, index) => (
    <MenuItem key={index} value={item.state_name}>
      {item.state_name}
    </MenuItem>
  ));

  const collegeMenu = collegeNames.map((item, index) => (
    <MenuItem key={index} value={item.college_name}>
      {item.college_name}
    </MenuItem>
  ));

  const collegeMajorMenu = collegeMajors.map((item, index) => (
    <MenuItem key={index} value={item.major_name} onClick={() => setSelectedMajorSalary(item.average_salary) & setSelectedMajorDescription(item.major_description)}>
      {item.major_name} 
      
    </MenuItem>
  ));

  return ( 
    <>
      <div>
        <FormControl fullWidth className='m-b-l'>
          <InputLabel id="state-select-label">State</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={selectedState}
            onChange={handleChange}
            className='m-b-l'
          >
            {menuItems}
          </Select>
        </FormControl>

        <FormControl fullWidth className='m-b-l' disabled={!selectedState}>
          <InputLabel id="college-select-label">College</InputLabel>
          <Select
            labelId="college-select-label"
            id="college-select"
            value={selectedCollege}
            onChange={handleChangeCollege}
            className='m-b-l'
          >
            {collegeMenu}
          </Select>
        </FormControl>

        <FormControl fullWidth className='m-b-l'  disabled={!selectedCollege}>
          <InputLabel id="college-major-select-label">Major</InputLabel>
          <Select
            labelId="college-major-select-label"
            id="major-select"
            value={selectedMajor}
            onChange={handleChangeMajor}
            className='m-b-l'
          >
            {collegeMajorMenu}
          </Select>
        </FormControl>

        <Button  disabled={!selectedCollege || !selectedState || !selectedMajor} 
        onClick={handleSubmit}
        >Submit</Button>
      </div>

    </>
  );
}
