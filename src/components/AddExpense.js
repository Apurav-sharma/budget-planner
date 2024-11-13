import React from "react";
import { v4 as uuidv4 } from "uuid";

function Add({ expenses, setExpense }) {
  var [name, setName] = React.useState("");
  var [cost, setCost] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    var object = {
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
    };
    setExpense([...expenses, object]);
    setName("");
    setCost(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="mt-4" htmlFor="name">
        Name
      </label>
      <input
        className="mt-1 col-12 form-control"
        id="name"
        value={name}
        required="required"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label className="mt-1" htmlFor="cost">
        Cost
      </label>
      <input
        className="mt-2 col-12 form-control"
        id="cost"
        value={cost}
        required="required"
        type="number"
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Save
      </button>
    </form>
  );
}

export default Add;
