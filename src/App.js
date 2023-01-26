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
          path="/login"
          element={<LogIn />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/pitt"
          element={<Pitt />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/indicator-table"
          element={<IndicatorTableView />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/indicators"
          element={<IndicatorView />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/indicators/new"
            element={<AddIndicator />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/indicators/:indicatorId"
            element={<IndicatorDetail />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/indicators/:indicatorId/edit"
            element={<EditIndicator />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/contacts"
          element={<ContactsView />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/contacts/new"
            element={<AddContact />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contacts/:contactId"
            element={<ContactDetail />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contacts/:contactId/edit"
            element={<EditContact />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/orgs"
          element={<OrgsView />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/orgs/new"
            element={<AddOrg />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/orgs/:orgId"
            element={<OrgDetail />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/orgs/:orgId/edit"
            element={<EditOrg />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/events"
          element={<EventsView />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/events/new"
            element={<AddEvent />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/events/:eventId"
            element={<EventDetail />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/events/:eventId/edit"
            element={<EditEvent />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/settings"
          element={<Settings />}
          loader={DummyFunction}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/import"
          element={<ImportMenu />}
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
