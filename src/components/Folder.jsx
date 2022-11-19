import { useState } from "react";
import { setSelectedFolder } from "../features";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { FcFolder } from "react-icons/fc";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const Folder = ({ explorer }) => {
  const dispatch = useDispatch();
  const { selected_folder } = useSelector((state) => state.familydata);
  const [expand, setExpand] = useState(true);

  const toggleExpand = () => {
    if (explorer.items.length) setExpand((prev) => !prev);
  };

  const handleClick = (selected_folder) => {
    dispatch(setSelectedFolder(selected_folder));
  };

  return (
    <Box component="div">
      <Box component="div">
        <Typography
          component="p"
          style={{
            display: "flex",
            gap: "0.2rem",
            alignItems: "center",
            marginLeft: !explorer.items?.length > 0 && "1.2rem",
            backgroundColor: explorer.id === selected_folder?.id && "#e0e0e0",
            color: explorer.id === selected_folder?.id && "black",
            borderRadius: "0.2rem",
            padding: "0rem 0.3rem",
            cursor: "pointer",
          }}
          onClick={() => {
            handleClick(explorer);
          }}
        >
          {expand ? (
            explorer.items?.length > 0 && (
              <BsChevronDown onClick={toggleExpand} />
            )
          ) : (
            <BsChevronRight onClick={toggleExpand} />
          )}
          <FcFolder />
          {explorer.name}
          <br />
        </Typography>
        <div
          style={{
            display: expand ? "block" : "none",
            padding: "0.2rem 0.5rem",
          }}
        >
          {explorer?.items?.map((exp) => {
            return (
              <span key={exp.id}>
                <Folder explorer={exp} />
              </span>
            );
          })}
        </div>
      </Box>
    </Box>
  );
};

export { Folder };
