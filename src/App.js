import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const DUMMYexpenses = [
  {
    id: "e1",
    title: "Car Price",
    amount: 1000000,
    date: new Date("November 15,2020"),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 999.1,
    date: new Date("January 15,2019"),
  },
  {
    id: "e3",
    title: "Car Repair",
    amount: 500,
    date: new Date("December 15,2021"),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMYexpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
