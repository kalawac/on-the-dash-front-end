import { selectOptions } from "./Utils";

import "./SingleSelectField.css";

const mapOptions = (field, formData) => {
  const optionArr = selectOptions?.[field] ?? [];
  const selectedOption = formData[field];
  console.log(selectedOption);

  return optionArr.map((optObj, index) => {
    console.log("mapping options");
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");
    const setSelected = selectedOption === label ? true : null;

    console.log(label);
    console.log(selectedOption === label);
    console.log(setSelected);

    if (setSelected) {
      return (
        <option key={index} value={optObj.id} selected>
          {label}
        </option>
      );
    }

    return (
      <option key={index} value={optObj.id}>
        {label}
      </option>
    );
  });
};

const SingleSelectField = (props) => {
  const { divId, field, fieldLabel, changeFunc } = props;

  return (
    <div key={divId} className="selectDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <select id={field} name={field} onChange={changeFunc}>
        {mapOptions}
      </select>
    </div>
  );
};

export default SingleSelectField;
