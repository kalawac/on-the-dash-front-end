import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "./IndicatorTableView.css";

const IndicatorTableView = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  // it may make sense for this component to do its own API calls

  return (
    <section id="itv" className="flexC">
      <h1>Indicator Details</h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </section>
  );
};

export default IndicatorTableView;
