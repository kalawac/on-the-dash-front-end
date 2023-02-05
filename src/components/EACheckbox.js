import React from "react";

import "./EACheckbox.css";

const EACheckbox = (props) => {
  const { column, value, checked, onChange } = props;
  const index = props?.index ?? `${column}${value}`;

  const index2 = "2".concat(index);
  const index3 = "3".concat(index);

  console.log(`EACheck: ${index}, ${index2}, ${index3}`);

  if (checked) {
    return (
      <div key={index} className="attRow flexR">
        <label key={index2} htmlFor={value}>
          Yes
        </label>
        <input
          key={index3}
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
      <label key={index2} htmlFor={value}>
        Yes
      </label>
      <input
        key={index3}
        type="checkbox"
        id={value}
        name={column}
        onChange={() => onChange(column, value)}
      />
    </div>
  );
};

export default EACheckbox;
