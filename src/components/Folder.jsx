import { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(true);
  console.log(explorer);
  return (
    <div>
      <span
        style={{ textDecoration: "underline" }}
        onClick={() =>
          explorer.items.length ? setExpand((prev) => !prev) : null
        }
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
