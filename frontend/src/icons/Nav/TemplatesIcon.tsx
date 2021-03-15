import React from "react";

const pathD =
  "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";

const TemplatesIcon = () => {
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={"w-6 h-6"}
    >
      <path d={pathD} fill={"currentColor"} />
    </svg>
  );
};

export default TemplatesIcon;