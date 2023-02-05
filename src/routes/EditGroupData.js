import { useState } from "react";
import {
  Link,
  useOutletContext,
  useParams,
  useNavigate,
} from "react-router-dom";

import "./EditGroupData.css";

import {
  formLabels,
  modelColumns,
  modelColumnsRequired,
} from "../components/Utils";
import DetailMenu from "../components/DetailMenu";

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

// const isError = () => {
//   return (
//     <p className="error">
//       This information doesn't seem to be in the correct format. Please check it
//       and try again.
//     </p>
//   );
// };

const EditGroupData = () => {
  const [thisData] = useOutletContext();
  const { groupName, itemId } = useParams();
  const navigate = useNavigate();

  const [thisItem] = thisData.filter((item) => {
    return item.id === itemId;
  });

  const [formData, setFormData] = useState(thisItem);

  const handleSingleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleMultiSelectChange = (event) => {
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
    // TBD, as applicable: Also include any other fields that I don't want edited.
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

  // atm, orgIDs are being bundled but orgs are out of sync until the data is grabbed again
  const submitForm = (formData) => {
    console.log("submitting form");
    if (formData?.age === "") {
      formData.age = 0;
    }
    console.log(formData);
    return navigate(`..`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  return (
    <div id="eg">
      <section id="editContent" className="flexC">
        <form onSubmit={handleSubmit}>
          {createForm(formData)}

          <button id="submit">Submit Changes</button>
        </form>
        <div>
          <Link to={`../${itemId}`}>
            <button id="cancel">Cancel</button>
          </Link>
        </div>
      </section>
      <section id="dmEg" className="flexC">
        <DetailMenu />
      </section>
    </div>
  );
};

export default EditGroupData;
