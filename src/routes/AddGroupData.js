import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

import "./AddGroupData.css";

import {
  formLabels,
  modelColumns,
  modelColumnsRequired,
} from "../components/Utils";
import {
  createContact,
  createEvent,
  createOrg,
} from "../components/DataAPICalls";

const kGroupAPICall = {
  contacts: createContact,
  // indicators: "Indicators",
  events: createEvent,
  orgs: createOrg,
};

const AddGroupData = () => {
  // TBD: Add protection (or check to ensure protection) so last name
  // must have at least one character. some places have no first name.
  // maybe add a warning pop-up to confirm that?

  const { groupName } = useParams();
  const navigate = useNavigate();

  const startingState = () => {
    const stateObj = {};
    //
    for (const [key, value] of Object.entries(modelColumns?.[groupName])) {
      if (value.name !== "nullFunc") {
        stateObj[key] = value.name === "MultiSelectField" ? [] : "";
      }
    }
    return stateObj;
  };

  const [formData, setFormData] = useState(startingState());

  //

  const handleSingleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleMultiSelectChange = (event) => {
    //
    //
    const selectedVals = Object.values(event.target.selectedOptions).map(
      (o) => o.value
    );
    //
    const fieldName = event.target.name;
    setFormData({ ...formData, [fieldName]: selectedVals });
  };

  const kChangeFuncName = {
    InputDate: handleSingleChange,
    InputNumber: handleSingleChange,
    InputText: handleSingleChange,
    InputTextMultiline: handleSingleChange,
    MultiSelectField: handleMultiSelectChange,
    SingleSelectField: handleSingleChange,
  };

  const createForm = (formData) => {
    // Exclude ID from the mapping list before mapping.
    // Note: As an extra guard, ID and other forms are also excluded by not
    // including them in the objects or by putting in NullFunc
    const itemArr = Object.keys(formData).filter((e) => e !== "id");

    const formArr = itemArr.map((field, index) => {
      const fieldLabel = formLabels?.[field];
      const webPart = modelColumns?.[groupName]?.[field];

      const props = {
        divId: index,
        field: field,
        fieldLabel: fieldLabel,
        formData: formData,
        changeFunc: kChangeFuncName[webPart.name],
        required: modelColumnsRequired?.[groupName]?.[field],
      };

      //
      //

      return webPart(props);
    });

    return formArr;
  };

  const submitForm = (formData) => {
    if (formData?.age === "") {
      formData.age = 0;
    }
    const groupAPIcall = kGroupAPICall[groupName];
    groupAPIcall(formData);
    return navigate(`..`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  return (
    <div id="ag">
      <section id="addContent" className="flexC">
        <form onSubmit={handleSubmit}>
          {createForm(formData)}

          <button id="submit">Submit</button>
        </form>
      </section>
      <section id="dmAg" className="flexC">
        <div id="dm3" className="flexC">
          <Link to={".."}>
            <button title="Close form">
              <FaTimes className="fa-icon" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AddGroupData;
