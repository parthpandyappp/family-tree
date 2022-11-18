import { Box, Typography, Divider } from "@mui/material";
const FamilyDetails = ({ family_details }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "0.7rem",
        width: "25rem",
        height: "20.5rem",
        padding: "1rem",
        "& .MuiTextField-root": { m: 1 },
      }}
    >
      <Typography variant="h6">Family Details</Typography>
      <Divider />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifySelf: "center",
          alignSelf: "center",
          width: "23rem",
          height: "20rem",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6">Name : {family_details.name}</Typography>
        <Typography variant="h6">Spouse: {family_details.spouse}</Typography>
        <Typography variant="h6">
          Location: {family_details.location}
        </Typography>
        <Typography variant="h6">
          Birth Year: {family_details.birth_yr}
        </Typography>
        <Typography variant="h6">
          Present Address: {family_details.addr}
        </Typography>
      </Box>
    </Box>
  );
};

export { FamilyDetails };
