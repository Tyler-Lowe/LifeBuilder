import * as React from 'react';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';

export default function StateSelection() {
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState('');

  // Fetch state names from the database
  useEffect(() => {
    dispatch({ type: 'FETCH_STATE_NAME' });
  }, [dispatch]);

  // Fetch college name from database
  useEffect(() => {
    if(selectedState)
    dispatch({ type: 'FETCH_COLLEGE_NAME', payload: selectedState });
  }, [selectedState, dispatch]);


  // This stores all the states that were fetched from the db
  const stateNames = useSelector((store) => store.stateName);
  const collegeNames = useSelector((store) => store.collegeName);
  console.log(collegeNames, 'Tyler Look here for college names');

  // Filter for unique state names and sort a-z
  const uniqueStateNames = stateNames
  .filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.state === item.state
    ))
  )
  .sort((a, b) => a.state.localeCompare(b.state));

  // event handler for when a state is selected from the menu it will store that selection 
  // and the state array will change which will fire the "FETCH-COLLEGE-NAME" useEffect hook
  const handleChange = (event) => {
    setSelectedState(event.target.value)
  };

  const menuItems = uniqueStateNames.map((item, index) => (
    <MenuItem key={index} value={item.state}>
      {item.state}
    </MenuItem>
  ));

  const collegeMenu = collegeNames.map((item, index) => (
  <MenuItem key={index} value={item.college_name}>
    {item.college_name}
  </MenuItem>
  ));

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          onChange={handleChange}
          label="State"
        >
          {menuItems}
        </Select>
        <Select
          labelId="college-select-label"
          id="college-select"
          // onChange={handleChange}
          label="College"
        >
          {collegeMenu}
        </Select>
      </FormControl>

      {/* Add more of your component logic here */}
    </>
  );
}
