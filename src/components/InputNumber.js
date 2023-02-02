import "./InputNumber.css";

const InputNumber = (props) => {
  const { divId, field, fieldLabel, formData, changeFunc, required } = props;

  // I can add in min and max constraint validation

  if (required) {
    return (
      <div key={divId} className="entryDiv">
        <label htmlFor={field}>{fieldLabel}</label>
        <input
          className="numberEntry"
          type="number"
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
    <div key={divId} className="entryDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <input
        className="numberEntry"
        type="number"
        id={field}
        name={field}
        value={formData[field]}
        onChange={changeFunc}
      />
    </div>
  );
};

export default InputNumber;
