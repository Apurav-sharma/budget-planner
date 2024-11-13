import React from "react";
import MODAL from "./modal";

function Budget({ cost, setbudget }) {
  return (
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
      <span>Budget: ${cost}</span>
      <MODAL setbudget={setbudget} />
    </div>
  );
}

export default Budget;