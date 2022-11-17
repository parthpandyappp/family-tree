import { useState } from "react";
import { setSelectedFolder } from "../features";
import { useDispatch } from "react-redux";

const Folder = ({ explorer }) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);

  const handleClick = (selected_folder) => {
    if (explorer.items.length) setExpand((prev) => !prev);
    dispatch(setSelectedFolder(selected_folder));
  };

  return (
    <div>
      <span
        style={{ textDecoration: "underline" }}
        onClick={() => {
          handleClick(explorer);
        }}
      >
        {explorer.name}
        <br />
      </span>
      <div style={{ display: expand ? "block" : "none", padding: "0.5rem" }}>
        {explorer?.items?.map((exp) => {
          return (
            <span key={exp.id}>
              <Folder explorer={exp} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { Folder };
