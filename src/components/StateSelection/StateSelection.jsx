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
  const [salary, setSalary] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLEGE_NAME' });
  }, [dispatch]);

  const collegeMajor = useSelector((store) => store.collegeMajor);
  const collegeName = useSelector((store) => store.collegeName);



  

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
  const sortedCollegeNames = collegeName
  .map(item => item.college_name) // Extract college names
  .sort();

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
    if(major) {
      const selectedMajorData = collegeMajor.find(item => item.major_name === major);
      let salary = selectedMajorData.average_salary;
      setSalary(salary)
      console.log('!!!!IMPORTANT!!!!', state, college, major, salary)
    } 
  };
  const uniqueMajors = [...new Set(collegeMajor.map(item => item.major_name))].sort();
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const updateUserFuture = (event) => {
    event.preventDefault();

    dispatch({
      type: 'UPDATE_USER_FUTURE',
      payload: {
        state: state,
        college: college,
        major: major,
        salary: salary,
      },
    });
    history.push("/future-preview");
  }; // end UPDATE USER FUTURE



  return (
    <div>
      <form onSubmit={updateUserFuture}>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <h3>What state will you attend college?</h3>
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
        <h3>What college will you attend?</h3>
        <Select 
          // labelId="demo-controlled-open-select-label"
          // id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={college}
          // required
          // placeholder='Choose your state'
          onChange={handleCollegeChange}
        >
          <MenuItem disabled value="">
            <em>None</em>
          </MenuItem>

          

          {sortedCollegeNames.map((college, index) => (
        <MenuItem key={index} value={college}>{college}</MenuItem>
      ))}
        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
        <h3>What will you major in?</h3>
        <Select 
      // labelId="demo-controlled-open-select-label"
      // id="demo-controlled-open-select"
      // open={open}
      // onClose={handleClose}
      // onOpen={handleOpen}
      value={major}
      // placeholder='Choose your college'
      onChange={handleMajorChange}
    >
      <MenuItem disabled value="">
        <em>None</em>
      </MenuItem>

      {uniqueMajors.map((major, index) => (
        <MenuItem key={index} value={major}>{major}</MenuItem>
      ))}
    </Select>
        <Button
                        sx={{
                          backgroundColor: "#f05b6d",
                          padding: ".5rem 1.25rem",
                          margin: "3rem 3rem"
                        }}
                        className="button-main"
                        variant="contained"
                        type="submit" name="submit" value="UPDATE_USER_FUTURE"
                        // onClick={() => {
                        //   history.push("/future-preview");
                        // }}
                      >
                        Start Your Journey
                      </Button>
        </FormControl>
        </form>
    </div>
  );
}