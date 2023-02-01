import "./InputDate.css";

const InputDate = (props) => {
  const { field, fieldLabel, formData, changeFunc, required } = props;

  // I can add in min and max constraint validation

  if (required) {
    return (
      <div className="dateEntryDiv">
        <label htmlFor={field}>{fieldLabel}</label>
        <input
          className="dateEntry"
          type="date"
          id={field}
          name={field}
          value={formData[field]}
          onChange={changeFunc}
          required
        />
      </div>
    );
  }

  return (
    <div className="dateEntryDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <input
        className="dateEntry"
        type="date"
        id={field}
        name={field}
        value={formData[field]}
        onChange={changeFunc}
      />
    </div>
  );
};

export default InputDate;
