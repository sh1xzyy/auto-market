import React from "react";

const Specs = ({ item }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {item.specs.map((spec, i) => (
        <li className="px-1 bg-black" key={i}>
          <span className="text-md font-bold">{spec.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Specs;
