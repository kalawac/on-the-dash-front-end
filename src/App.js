import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import axios from "axios";
// import rd3 from "react-d3-library";

import "./App.css";

import NavLayout from "./components/NavLayout";
import GroupDetail from "./routes/GroupDetail";
import GroupView from "./routes/GroupView";

import AddGroup from "./routes/AddGroup";
import Dashboard from "./routes/Dashboard";
import EditGroup from "./routes/EditGroup";
import ErrorPage from "./routes/ErrorPage";
import ImportMenu from "./routes/ImportMenu";
import IndicatorTableView from "./routes/IndicatorTableView";
import LogIn from "./routes/LogIn";
import Pitt from "./routes/Pitt";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";

import { groupData } from "./components/DummyData";

const DummyFunction = () => null;

const loadData = () => groupData;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavLayout />}>
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
          <Route
            path="/indicator-table"
            element={<IndicatorTableView />}
            loader={DummyFunction}
            errorElement={<ErrorPage />}
          />
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
          <Route path="/404" element={<ErrorPage />} />
          <Route
            path="/:groupName"
            element={<GroupView />}
            loader={loadData}
            errorElement={<ErrorPage />}
          >
            <Route
              path="new"
              element={<AddGroup />}
              loader={DummyFunction}
              errorElement={<ErrorPage />}
            />
            <Route
              path=":itemId"
              element={<GroupDetail />}
              loader={DummyFunction}
              errorElement={<ErrorPage />}
            />
            <Route
              path=":itemId/edit"
              element={<EditGroup />}
              loader={DummyFunction}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Route>
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
        <Route path="*" element={<Navigate to="/404" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
