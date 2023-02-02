import "./InputTextMultiline.css";

const InputTextMultiline = (props) => {
  const { divId, field, fieldLabel, formData, changeFunc, required } = props;

  if (required) {
    return (
      <div key={divId} className="entryMLDiv">
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
    <div key={divId} className="entryMLDiv">
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
