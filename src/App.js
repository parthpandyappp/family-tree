import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Folder, FamilyDetails, FamilyForm } from './components';
import { setFamilyData, toggleForm, setSelectedFolder } from './features';
import { Box, Button, Typography } from "@mui/material"

function App() {
  const dispatch = useDispatch()
  const { family_data, selected_folder, formOrDetails } = useSelector((state) => state.familydata)

  useEffect(() => {
    dispatch(setFamilyData())
    dispatch(setSelectedFolder({
      name: "Great Grand Father",
      spouse: "GrandFather's spouse",
      location: "Bhopal",
      birth_yr: "1985",
      addr: "123, Patel Rd. Bhopal",
    }))
  }, [dispatch])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h3" sx={{ margin: "1rem" }}>Ancestry: Know your roots</Typography>
      <Box component="div" sx={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "0.7rem", padding: "1rem" }}>
          <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: "15rem", width: "15rem", overflowY: "scroll", overflowX: "scroll" }}>
            <Folder explorer={family_data} />
          </Box>
          {!formOrDetails ? <Button sx={{ justifySelf: "center", alignSelf: "center", width: "15rem", marginTop: "0.5rem" }} variant="contained" onClick={() => dispatch(toggleForm())}>Add family</Button> : <Button sx={{ justifySelf: "center", alignSelf: "center", width: "15rem", marginTop: "0.5rem" }} variant="contained" disabled>Add family</Button>}
          <Button sx={{ width: "15rem", justifySelf: "center", alignSelf: "center", marginTop: "0.5rem" }} variant="contained" >Print Family Tree</Button>
        </Box>
        {formOrDetails ? <FamilyForm /> : <FamilyDetails family_details={selected_folder} />}
      </Box >
    </Box>
  );
}

export default App;
