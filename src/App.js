import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remain from "./components/remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/expenseList";
import Add from "./components/AddExpense";
import { Button } from "react-bootstrap";

function App() {
  var [expenses, setExpense] = React.useState([
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Holiday", cost: 300 },
    { id: 3, name: "Transportation", cost: 70 },
    { id: 4, name: "Fuel", cost: 40 },
    { id: 5, name: "Child care", cost: 500 }
  ]);
  var [cost, setCost] = React.useState(0);

  React.useEffect(() => {
    var cost2 = 0;
    expenses.forEach((expense) => (cost2 += expense.cost));
    setCost(cost2);
  }, [expenses]);
  var [budget, setbudget] = React.useState(2000);

  return (
    <div className="container">
      <h1 className="mt-4">My Budget Planner</h1>
      <div className="row mt-4">
        <div className="col-sm">
          <Budget cost={budget} setbudget={setbudget} />
        </div>
        <div className="col-sm">
          <Remain cost={budget - cost} />
        </div>
        <div className="col-sm">
          <Spent cost={cost} />
        </div>
      </div>
      <h2 className="mt-4">Expenses</h2>
      <div className="row mt-4">
        <div className="col-sm-12">
          <ExpenseList expenses={expenses} setExpense={setExpense} />
        </div>
      </div>
      <h2 className="mt-4">Add Expense</h2>
      <Add setExpense={setExpense} expenses={expenses} />
    </div>
  );
}

export default App;
