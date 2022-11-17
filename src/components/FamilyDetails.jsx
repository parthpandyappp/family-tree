const FamilyDetails = ({ family_details }) => {
  return (
    <div>
      <p>Name : {family_details.name}</p>
      <p>Spouse: {family_details.spouse}</p>
      <p>Location: {family_details.location}</p>
      <p>Birth Year: {family_details.birth_yr}</p>
      <p>Present Address: {family_details.addr}</p>
    </div>
  );
};

export { FamilyDetails };
