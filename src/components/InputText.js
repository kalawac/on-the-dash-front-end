import "./InputText.css";

const InputText = (props) => {
  const { field, fieldLabel, formData, changeFunc, required } = props;

  if (required) {
    return (
      <div className="entryDiv">
        <label htmlFor={field}>{fieldLabel}</label>
        <input
          className="textEntry"
          type="text"
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
    <div className="entryDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <input
        className="textEntry"
        type="text"
        id={field}
        name={field}
        value={formData[field]}
        onChange={changeFunc}
      />
    </div>
  );
};

export default InputText;
