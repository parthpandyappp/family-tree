import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFamilyData } from "../features";

const FamilyForm = () => {
  const initialValues = {
    id: "",
    name: "",
    spouse: "",
    location: "",
    birth_yr: "",
    addr: "",
    items: [],
  };
  const dispatch = useDispatch();
  const { selected_folder } = useSelector((state) => state.familydata);
  const [form_data, setFormData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFamilyData({ form_data, selected_folder }));
  };

  const handleChange = (field, value) => {
    setFormData({ ...form_data, [field]: value });
  };

  console.log(form_data);

  return (
    <form
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        maxWidth: "75%",
        padding: "1rem",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <label htmlFor="spouse_name">Spouse name</label>
      <input
        name="spouse_name"
        type="text"
        onChange={(e) => handleChange("spouse", e.target.value)}
      />

      <label htmlFor="location">Location</label>
      <input
        name="location"
        type="text"
        onChange={(e) => handleChange("location", e.target.value)}
      />

      <label htmlFor="birth_year">Birth year</label>
      <input
        name="birth_year"
        type="text"
        onChange={(e) => handleChange("birth_yr", e.target.value)}
      />

      <label htmlFor="address">Present address</label>
      <input
        name="address"
        type="text"
        onChange={(e) => handleChange("addr", e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export { FamilyForm };
