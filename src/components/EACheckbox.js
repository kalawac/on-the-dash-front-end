import React from "react";

import "./EACheckbox.css";

const EACheckbox = (props) => {
  const { column, value, checked, onChange } = props;
  const index = props?.index ?? `${column}${value}`;

  if (checked) {
    return (
      <div key={index} className="attRow flexR">
        <label htmlFor={value}>Yes</label>
        <input
          type="checkbox"
          id={value}
          name={column}
          onChange={() => onChange(column, value)}
          checked
        />
      </div>
    );
  }

  return (
    <div key={index} className="attRow flexR">
      <label htmlFor={value}>Yes</label>
      <input
        type="checkbox"
        id={value}
        name={column}
        onChange={() => onChange(column, value)}
      />
    </div>
  );
};

export default EACheckbox;
