import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function CollegeSelection() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Select your college
      </Button>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        {/* <InputLabel id="demo-controlled-open-select-label">major</InputLabel> */}
        <Select 
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          placeholder='Choose your college'
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Tennessee Technological University</MenuItem>
          <MenuItem value={20}>University Of Tennessee</MenuItem>
          <MenuItem value={30}>Middle Tennessee State University</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}