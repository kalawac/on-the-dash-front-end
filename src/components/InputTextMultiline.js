import "./InputTextMultiline.css";

const InputTextMultiline = (props) => {
  const { field, fieldLabel, formData, changeFunc, required } = props;

  if (required) {
    return (
      <div className="entryMLDiv">
        <label htmlFor={field}>{fieldLabel}</label>
        <textarea
          className="textEntryML"
          type="text"
          id={field}
          name={field}
          value={formData[field]}
          onChange={changeFunc}
          maxLength="300"
          required
        />
      </div>
    );
  }

  return (
    <div className="entryMLDiv">
      <label htmlFor={field}>{fieldLabel}</label>
      <textarea
        className="textEntryML"
        type="text"
        id={field}
        name={field}
        value={formData[field]}
        onChange={changeFunc}
        maxLength="300"
      />
    </div>
  );
};

export default InputTextMultiline;
