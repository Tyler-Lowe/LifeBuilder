import * as React from 'react';
import {useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';



export default function StateSelection() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLEGE_NAME' });
  }, [dispatch]);

  const collegeMajor = useSelector((store) => store.collegeMajor);
  const collegeName = useSelector((store) => store.collegeName);
  console.log(collegeName, 'College name here is it working?')

  const allStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleChange = (event) => {
    setState(event.target.value);
    
  };

console.log('logging set state here', state);

  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
    console.log('logging college names here', collegeName);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <Select 
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={state}
          required
          placeholder='Choose your state'
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>
          {allStates.map((state, index) => (
        <MenuItem key={index} value={state}>{state}</MenuItem>
      ))}
        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
        <Select 
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={college}
          required
          placeholder='Choose your state'
          onChange={handleCollegeChange}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>

            {collegeName.map((collegeName, index) => {
  if (collegeName.state === 'Tennessee') {
    return (
      <MenuItem key={index} value={collegeName.college_name}>
       {collegeName.college_name}
      </MenuItem>
    );
  } 
})}
        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
        <Select 
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={major}
          required
          placeholder='Choose your state'
          onChange={handleMajorChange}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>

            {collegeMajor.map((collegeMajor, index) => {
  if (collegeMajor.college_name) {
    return (
      <MenuItem key={index} value={collegeMajor.major_name}>
       {collegeMajor.major_name}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem>
      <em>Make A valid state selection </em>
     </MenuItem>
    ) // Return null for other states
  }
})}
        </Select>
        <Button
                        sx={{
                          backgroundColor: "#f05b6d",
                          padding: ".5rem 1.25rem",
                        }}
                        className="button-main"
                        variant="contained"
                        type="button"
                        onClick={() => {
                          history.push("/future-preview");
                        }}
                      >
                        Start Your Journey
                      </Button>
        </FormControl>

    </div>
  );
}