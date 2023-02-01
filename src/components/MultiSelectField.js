import { selectOptions } from "./Utils";

import "./MultiSelectField.css";

const mapOptions = (field, formData) => {
  const optionArr = selectOptions?.[field] ?? [];
  const selectedOptionsArr = formData[field];
  // console.log(selectedOptionsArr);

  return optionArr.map((optObj, index) => {
    // console.log("mapping options");
    // console.log(index);
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");
    const setSelected =
      selectedOptionsArr.indexOf(Number(optObj.id)) >= 0 ? true : null;

    // console.log(label);
    // console.log(optObj.id);
    // console.log(selectedOptionsArr.indexOf(Number(optObj.id)));
    // console.log(setSelected);

    // TBD: something going wrong here with the keys. talk to mark. keys passing in but not going to the right place.
    // console log all the select options in the handle change function to see

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

const getIdNames = (field, formData) => {
  const optionArr = selectOptions?.[field] ?? [];
  const selectedOptionsArr = formData[field];
  console.log(selectedOptionsArr);
  let selectedObjectsArr = optionArr.filter(
    (optObj) => selectedOptionsArr.indexOf(Number(optObj.id)) >= 0
  );
  console.log(selectedObjectsArr);

  const selectedLabelsArr = selectedObjectsArr.map((optObj, index) => {
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");
    return label;
  });

  console.log(selectedLabelsArr);

  return selectedLabelsArr.join(", ");
};

const MultiSelectField = (props) => {
  const { divId, field, fieldLabel, formData, changeFunc } = props;

  return (
    <div key={divId} className="selectDiv">
      <label htmlFor={field}>
        {fieldLabel}{" "}
        <span className="hint">
          (hold down ctrl/command while clicking to select multiple options)
        </span>
      </label>
      <select id={field} name={field} onChange={changeFunc} multiple size="5">
        {mapOptions(field, formData)}
      </select>
      <p>Currently selected: {getIdNames(field, formData)}</p>
    </div>
  );
};

export default MultiSelectField;
