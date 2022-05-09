import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const startEditHandler = () => {
    setIsEdit(true);
  };

  const stopEditHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEditHandler}>Add New Expense</button>}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}
