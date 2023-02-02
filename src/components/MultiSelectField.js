import { selectOptions } from "./Utils";

import "./MultiSelectField.css";

const mapOptions = (field) => {
  const optionArr = selectOptions?.[field] ?? [];

  return optionArr.map((optObj, index) => {
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");

    return (
      <option key={index} value={optObj.id}>
        {label}
      </option>
    );
  });
};

const getIdNames = (field, formData) => {
  const optionArr = selectOptions?.[field] ?? [];
  const selectedOptionsArr = formData[field];
  let selectedObjectsArr = optionArr.filter(
    (optObj) => selectedOptionsArr.indexOf(optObj.id) >= 0
  );
  const selectedLabelsArr = selectedObjectsArr.map((optObj, index) => {
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");
    return label;
  });

  return selectedLabelsArr.join(", ");
};

const MultiSelectField = (props) => {
  const { divId, field, fieldLabel, formData, changeFunc } = props;
  const selectedOptionsArr = formData[field];

  return (
    <div key={divId} className="selectDiv">
      <label htmlFor={field}>
        {fieldLabel}{" "}
        <span className="hint">
          (hold down ctrl/command while clicking to select multiple options)
        </span>
      </label>
      <select
        id={field}
        name={field}
        defaultValue={selectedOptionsArr}
        onChange={changeFunc}
        multiple
        size="5"
      >
        {mapOptions(field)}
      </select>
      <p>Currently selected: {getIdNames(field, formData)}</p>
    </div>
  );
};

export default MultiSelectField;
