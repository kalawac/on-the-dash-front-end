import { selectOptions } from "./Utils";

import "./SingleSelectField.css";

const mapOptions = (field, formData) => {
  const optionArr = selectOptions?.[field] ?? [];
  //

  return optionArr.map((optObj, index) => {
    //
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");

    return (
      <option key={index} value={optObj.id}>
        {label}
      </option>
    );
  });
};

const SingleSelectField = (props) => {
  const { divId, field, fieldLabel, formData, changeFunc, required } = props;
  const selectedOption = formData[field];

  if (required) {
    return (
      <div key={divId} className="selectDiv">
        <label htmlFor={field}>{fieldLabel}</label>
        <select
          id={field}
          name={field}
          defaultValue={selectedOption}
          onChange={changeFunc}
          required
        >
          {mapOptions(field, formData)}
        </select>
      </div>
    );
  }

  return (
    <div key={divId} className="selectDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <select
        id={field}
        name={field}
        defaultValue={selectedOption}
        onChange={changeFunc}
      >
        {mapOptions(field, formData)}
      </select>
    </div>
  );
};

export default SingleSelectField;
