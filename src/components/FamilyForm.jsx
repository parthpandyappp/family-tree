import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Box } from "@mui/material/";
import { updateFamilyData, toggleForm } from "../features";

const FamilyForm = () => {
  const initialValues = {
    id: "",
    name: "Son 1",
    spouse: "Son 1's spouse",
    location: "Koorla",
    birth_yr: "1898",
    addr: "Sajjangarh, Rajashthan(398563)",
    items: [],
  };
  const dispatch = useDispatch();
  const { selected_folder } = useSelector((state) => state.familydata);
  const [form_data, setFormData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFamilyData({ form_data, selected_folder }));
    dispatch(toggleForm());
  };

  const handleChange = (field, value) => {
    setFormData({ ...form_data, [field]: value });
  };

  console.log(form_data);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "25rem",
        height: "20.5rem",
        border: "1px solid black",
        borderRadius: "0.7rem",
        padding: "1rem",
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
        <Box component="div" sx={{ display: "flex" }}>
          <TextField
            required
            name="name"
            onChange={(e) => handleChange("name", e.target.value)}
            label="Name of the child"
            defaultValue={form_data.name}
          />
          <TextField
            required
            name="spouse_name"
            onChange={(e) => handleChange("spouse", e.target.value)}
            label="Spouse name"
            defaultValue={form_data.spouse}
          />
        </Box>
        <Box component="div" sx={{ display: "flex" }}>
          <TextField
            required
            name="location"
            onChange={(e) => handleChange("location", e.target.value)}
            label="Location"
            defaultValue={form_data.location}
          />
          <TextField
            required
            name="birth_year"
            type="number"
            onChange={(e) => handleChange("birth_yr", e.target.value)}
            label="Birth year"
            defaultValue={form_data.birth_yr}
          />
        </Box>

        <TextField
          required
          name="address"
          onChange={(e) => handleChange("addr", e.target.value)}
          label="Permanent address"
          defaultValue={form_data.addr}
        />

        <Button type="submit" variant="contained" sx={{ margin: "0.5rem" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export { FamilyForm };
