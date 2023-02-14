import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import rd3 from "react-d3-library";

import "./App.css";

import NavLayout from "./components/NavLayout";
import GroupDetail from "./routes/GroupDetail";
import GroupView from "./routes/GroupView";

import AddGroupData from "./routes/AddGroupData";
import Dashboard from "./routes/Dashboard";
import EditGroupData from "./routes/EditGroupData";
import EventAttendance2 from "./routes/EventAttendance2";
import ErrorPage from "./routes/ErrorPage";
import ImportMenu from "./routes/ImportMenu";
import IndicatorTableView from "./routes/IndicatorTableView";
import LogIn from "./routes/LogIn";
import Pitt from "./routes/Pitt";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";

import FourOhFour from "./routes/FourOhFour";

const DummyFunction = () => null;

// const loadData = () => groupData;

function App() {
  let [csvMode, setCsvMode] = useState(false);

  const loadData = () => {
    return {
      csvMode: csvMode,
      // appData: groupData,
      // loadingStatus: loading,
    };
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavLayout />}>
          <Route
            path="/"
            element={<Dashboard />}
            errorElement={<ErrorPage />}
          />
          <Route path="/pitt" element={<Pitt />} errorElement={<ErrorPage />} />
          <Route
            path="/indicator-table"
            element={<IndicatorTableView />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/settings"
            element={<Settings />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/import"
            element={<ImportMenu />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/:groupName"
            element={<GroupView />}
            loader={loadData}
            errorElement={<ErrorPage />}
            // errorElement={<FourOhFour />} // change back at end
          >
            <Route
              path="new"
              element={<AddGroupData />}
              loader={DummyFunction}
              errorElement={<ErrorPage />}
            />
            <Route
              path=":itemId"
              element={<GroupDetail />}
              loader={DummyFunction}
              errorElement={<ErrorPage />} // change to FourOhFour at end
            />
            <Route
              path=":itemId/edit"
              element={<EditGroupData />}
              loader={DummyFunction}
              errorElement={<ErrorPage />}
            />
          </Route>
          <Route
            path="/events/:itemId/attendance"
            element={<EventAttendance2 />}
            loader={DummyFunction}
            errorElement={<FourOhFour />}
          />
          <Route path="/404" element={<FourOhFour />} />
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
