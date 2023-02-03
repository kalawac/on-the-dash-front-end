import { selectOptions } from "./Utils";

import "./InputRadioButtons.css";

const InputRadioButtons = (props) => {
  const { divId, field, formData, changeFunc, required } = props;
  const selectedOption = formData[field];
  const optionArr = selectOptions?.[field] ?? [];

  const mappedButtons = optionArr.map((optObj, index) => {
    const label = optObj?.name ?? [optObj?.fname, optObj?.lname].join(" ");
    const checked = selectedOption === optObj.id ? true : false;

    if (checked && required) {
      return (
        <div>
          <label key={index} htmlFor={optObj.id}>
            {label}
          </label>
          <input
            className="radio"
            type="radio"
            id={optObj.id}
            name={field}
            value={optObj.id}
            onChange={changeFunc}
            checked
            required
          />
        </div>
      );
    } else if (checked) {
      return (
        <div>
          <label key={index} htmlFor={optObj.id}>
            {label}
          </label>
          <input
            className="radio"
            type="radio"
            id={optObj.id}
            name={field}
            value={optObj.id}
            onChange={changeFunc}
            checked
          />
        </div>
      );
    } else if (required) {
      return (
        <div>
          <label key={index} htmlFor={optObj.id}>
            {label}
          </label>
          <input
            className="radio"
            type="radio"
            id={optObj.id}
            name={field}
            value={optObj.id}
            onChange={changeFunc}
            required
          />
        </div>
      );
    } else {
      return (
        <div>
          <label key={index} htmlFor={optObj.id}>
            {label}
          </label>
          <input
            className="radio"
            type="radio"
            id={optObj.id}
            name={field}
            value={optObj.id}
            onChange={changeFunc}
          />
        </div>
      );
    }
  });

  return (
    <div key={divId} className="radioDiv">
      {mappedButtons}
    </div>
  );
};

export default InputRadioButtons;
