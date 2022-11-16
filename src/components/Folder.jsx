import { useState, useEffect } from "react";
import { setSelectedFolder } from "../features";
import { useDispatch, useSelector } from "react-redux";

const Folder = ({ explorer }) => {
  console.log("DATA IN FOLDER: ", explorer);
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);
  const { selected_folder } = useSelector((state) => state.familydata);

  const handleClick = (selected_folder) => {
    if (explorer.items.length) setExpand((prev) => !prev);
    dispatch(setSelectedFolder(selected_folder));
  };

  useEffect(() => {
    console.log("exec");
  }, [explorer]);

  console.log("SELECTED FOLDER", selected_folder);

  return (
    <div>
      <span
        style={{ textDecoration: "underline" }}
        onClick={() => {
          handleClick(explorer.id);
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
