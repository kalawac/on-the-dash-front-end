import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import axios from "axios";

import "./App.css";

import AddContact from "./routes/AddContact";
import AddEvent from "./routes/AddEvent";
import AddIndicator from "./routes/AddIndicator";
import AddOrg from "./routes/AddOrg";
import ContactDetail from "./routes/ContactDetail";
import ContactsView from "./routes/ContactsView";
import Dashboard from "./routes/Dashboard";
import EditContact from "./routes/EditContact";
import EditEvent from "./routes/EditEvent";
import EditIndicator from "./routes/EditIndicator";
import EditOrg from "./routes/EditOrg";
import ErrorPage from "./routes/ErrorPage";
import EventDetail from "./routes/EventDetail";
import EventsView from "./routes/EventsView";
import ImportMenu from "./routes/ImportMenu";
import IndicatorDetail from "./routes/IndicatorDetail";
import IndicatorTableView from "./routes/IndicatorTableView";
import IndicatorView from "./routes/IndicatorView";
import LogIn from "./routes/LogIn";
import OrgDetail from "./routes/OrgDetail";
import OrgsView from "./routes/OrgsView";
import Pitt from "./routes/Pitt";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";

// Dashboard ("/")

// PITT ("/pitt")

// Indicator Overview ("/indicator-table")

// Indicators ("/indicators")
// Add Indicator ("/indicators/new")
// View Indicator ("/indicators/:indicatorId")
// Update Indicator ("/indicators/:indicatorId/edit")

// People ("/contacts")
// Add Person ("/contacts/new")
// View Person ("/contacts/:contactId")
// Update Person ("/contacts/:contactId/edit")

// Organizations ("/orgs")
// Add Organization ("/orgs/new")
// View Organization ("/orgs/:orgId")
// Update Organization ("/orgs/:orgId/edit")

// Events ("/events")
// Add Event ("/events/new")
// View Event ("/events/:eventId")
// Update Event ("/events/:eventId/edit")

// Import Data ("/import")

// Settings ("/settings")

// Log In ("/login")

// Sign Up ("/signup")

const DummyFunction = () => null;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Dashboard />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/pitt"
          element={<Pitt />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
