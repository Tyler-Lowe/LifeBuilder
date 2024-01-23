import * as React from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';

export default function StateSelection() {
  const dispatch = useDispatch();

  // Fetch state names from the database
  useEffect(() => {
    dispatch({ type: 'FETCH_STATE_NAME' });
  }, [dispatch]);

  const stateNames = useSelector((store) => store.stateName);

  // Filter for unique state names
  const uniqueStateNames = stateNames.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.state === item.state
    ))
  );

  const menuItems = uniqueStateNames.map((item, index) => (
    <MenuItem key={index} value={item.state}>
      {item.state}
    </MenuItem>
  ));

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          label="State"
        >
          {menuItems}
        </Select>
      </FormControl>

      {/* Add more of your component logic here */}
    </>
  );
}
