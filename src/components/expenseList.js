import React from "react";
import { TiDelete } from "react-icons/ti";
import "../App.css";

function ExpenseList({ expenses, setExpense }) {
  function handleDelete(id) {
    setExpense((prev) => prev.filter((expense) => expense.id !== id));
  }

  var [search, setsearch] = React.useState("");

  return (
    <div className="">
      <input
        placeholder="  Type to search..."
        className="col-12 mt-1 form-control mb-3"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <ul className="list-group">
        {expenses
          .filter((expense) => {
            if (search === "") return expense;
            else if (expense.name.toLowerCase().includes(search.toLowerCase()))
              return expense;
          })
          .map((expense) => (
            <li
              id={expense.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <h4>{expense.name}</h4>
              <div className="list-icons">
                <span className="badge bg-primary rounded-pill">
                  ${expense.cost}
                </span>
                <TiDelete onClick={() => handleDelete(expense.id)} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
