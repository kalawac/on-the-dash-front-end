import { useState, useEffect } from "react";
import {
  Outlet,
  Link,
  useParams,
  // useLoaderData,
  useNavigate,
} from "react-router-dom";

import {
  dummyIndicatorData,
  getAllContactsAPI,
  getAllEventsAPI,
  getAllOrgsAPI,
} from "../components/DataAPICalls";
import SingleSelectField from "../components/SingleSelectField";
import "./GroupView.css";

const kSearchParamMenu = {
  contacts: {
    sort: null,
    name: null,
    fname: null,
    lname: null,
    gender: null,
    org: null,
    OR: null,
  },
  events: {
    sort: null,
    name: null,
    type: null,
    subject: null,
    OR: null,
  },
  indicators: {
    sort: null,
  },
  orgs: {
    sort: null,
    name: null,
    sector: null,
    wf: null,
    OR: null,
  },
};

const selectField = {
  contacts: "gvContacts",
  orgs: "gvOrgs",
  events: "gvEvents",
};

const kTitle = {
  contacts: "Contacts",
  indicators: "Indicators",
  events: "Events",
  orgs: "Organizations",
};

const kGroupAPICall = {
  contacts: getAllContactsAPI,
  // indicators: "Indicators",
  events: getAllEventsAPI,
  orgs: getAllOrgsAPI,
};

// remember to remove bootstrap classes if you don't end up using them
// is it possible to do the API call in here? going to be a problem for setting search parameters

const GroupView = () => {
  // const { appData } = useLoaderData();
  const { groupName } = useParams();
  const navigate = useNavigate();

  let [formState, setFormState] = useState({
    selectValue: "default",
    searchBar: "",
    searchParams: kSearchParamMenu,
  });

  let [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => async () => {
      const contacts = await getAllContactsAPI();
      const events = await getAllEventsAPI();
      const orgs = await getAllOrgsAPI();
      const groupData = {
        contacts: contacts,
        events: events,
        indicators: dummyIndicatorData,
        orgs: orgs,
      };
      setLoading((loading) => !loading);
      return setGroupData(groupData);
    },
    []
  );

  if (loading) {
    return (
      <div id="gl" className="flexR">
        <div id="listing" className="container">
          <h1>{kTitle[groupName]}</h1>
          <p>Data loading!</p>
        </div>
        <div id="details" className="flexC">
          <Outlet />
        </div>
      </div>
    );
  }

  const timeoutFunction = () => {
    setLoading(false);
  };

  let thisData = groupData?.[groupName] ?? [];

  if (thisData === undefined || thisData === []) {
    setLoading(true);
    setTimeout(timeoutFunction, 2000);
  }

  const getList = (groupArr) => {
    return groupArr.map((el) => {
      const label = el?.name ?? [el?.fname, el?.lname].join(" ");

      return (
        <Link to={`${el.id}`} className="item" key={el.id}>
          <li className="lgi list-group-item list-group-item-action">
            {label}
          </li>
        </Link>
      );
    });
  };

  const handleTyping = (event) => {
    const fieldValue = event.target.value;
    const newFormData = { ...formState, searchBar: fieldValue };
    setFormState(newFormData);
  };

  const handleSort = async (event) => {
    event.preventDefault();
    const newSearchParams = { ...formState.searchParams };

    newSearchParams[groupName].sort =
      event.target.value === "default" ? null : event.target.value;

    const newSelectValue = event.target.value;

    setFormState({
      selectValue: newSelectValue,
      searchParams: newSearchParams,
    });
    const apiCall = kGroupAPICall[groupName];
    const updatedData = await apiCall(formState.searchParams[groupName]);
    const newGroupData = { ...groupData };
    newGroupData[groupName] = updatedData;
    setGroupData(newGroupData);
  };

  const handleAdvancedSearch = async (event, formData) => {
    event.preventDefault();
    const newSearchParams = { ...formState.searchParams };
    newSearchParams[groupName] = formData;

    const queries = Object.entries(formData).filter(
      ([_, value]) => value != null
    );

    const queryWriteUp = queries.reduce((accumulator, currentValue) => {
      const [key, value] = currentValue;
      return accumulator.concat([" ", `${key}:${value}`]);
    }, "");

    setFormState({
      ...formState,
      searchBar: queryWriteUp,
      searchParams: newSearchParams,
    });
    const apiCall = kGroupAPICall[groupName];
    const updatedData = await apiCall(formState.searchParams[groupName]);
    const newGroupData = { ...groupData };
    newGroupData[groupName] = updatedData;
    setGroupData(newGroupData);
  };

  const handleSimpleSearch = async (event) => {
    event.preventDefault();
    const newSearchParams = { ...formState.searchParams };
    newSearchParams[groupName].name = formState.searchBar;

    setFormState({
      ...formState,
      searchParams: newSearchParams,
    });
    const apiCall = kGroupAPICall[groupName];
    const updatedData = await apiCall(formState.searchParams[groupName]);
    const newGroupData = { ...groupData };
    newGroupData[groupName] = updatedData;
    setGroupData(newGroupData);
  };

  const clearSearch = async (event) => {
    const newformState = {
      ...formState,
      searchBar: "",
      searchParams: kSearchParamMenu,
    };
    setFormState(newformState);
    return navigate("/".concat(groupName));
  };

  const selectFieldValue = selectField[groupName];
  const selectFormData = {};
  selectFormData[selectFieldValue] = formState.selectValue;

  return (
    <div id="gl" className="flexR">
      <div id="listing" className="container">
        <h1>{kTitle[groupName]}</h1>
        <form id="search-form" role="search">
          <input
            id="glSearch"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="glSearch"
            onInput={handleTyping}
          />
          <button id="submitSearch" onClick={handleSimpleSearch}>
            Search
          </button>
          <button id="clearSearch" onClick={clearSearch}>
            Clear Search
          </button>
        </form>
        <Link to={`search`}>Advanced Search Options</Link>
        <SingleSelectField
          divId="1"
          field={selectFieldValue}
          fieldLabel="Sort by:"
          formData={selectFormData}
          changeFunc={handleSort}
          required={false}
        />
        <button onClick={() => navigate(`new`)} className="addRecord">
          Add an entry
        </button>
        <ul id="groupList" className="list-group list-group-flush">
          {getList(thisData)}
        </ul>
      </div>
      <div id="details" className="flexC">
        <Outlet context={[thisData, formState, handleAdvancedSearch]} />
      </div>
    </div>
  );
};

export default GroupView;
