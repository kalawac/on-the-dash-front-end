import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./AddGroupData.css";

import {
  formLabels,
  modelColumns,
  modelColumnsRequired,
} from "../components/Utils";
import DetailMenu from "../components/DetailMenu";
import MultiSelectField from "../components/MultiSelectField";

// const handleSubmit = async (formData) => {
//   const requestBody = formData;

//   try {
//     const response = await axios.post(`${kBaseUrl}/users`, requestBody);
//     return setLoggedIn({
//       userId: response.data.id,
//       repeatLogin: false,
//       repeatSignUp: false,
//     });
//   } catch (err) {
//     return setLoggedIn({
//       userId: null,
//       repeatLogin: true,
//       repeatSignUp: false,
//     });
//   }
// };

const isError = () => {
  return (
    <p className="error">
      This information doesn't seem to be in the correct format. Please check it
      and try again.
    </p>
  );
};

const AddGroupData = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();

  const startingState = () => {
    const stateObj = {};
    // console.log(stateObj);
    for (const [key, value] of Object.entries(modelColumns?.[groupName])) {
      if (value.name !== "nullFunc") {
        stateObj[key] = value === MultiSelectField ? [] : "";
      }
    }
    return stateObj;
  };

  const [formData, setFormData] = useState(startingState());

  // console.log(formData);

  const handleSingleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleMultiSelectChange = (event) => {
    // console.log("handling change");
    // console.log(Object.values(event.target.options));
    const selectedVals = Object.values(event.target.selectedOptions).map(
      (o) => o.value
    );
    // console.log(selectedVals);
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

      // console.log(props);
      // console.log(typeof webPart);

      return webPart(props);
    });

    return formArr;
  };

  const submitForm = (formData) => {
    console.log("submitting form");
    console.log(formData);
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
      {/* <section id="dmAg" className="flexC">
        <DetailMenu />
      </section> */}
    </div>
  );
};

export default AddGroupData;
