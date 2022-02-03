import React from 'react'
import Expenses from "./Components/Expenses";

export default function App() {
  const expenses = [
    { title: 'Car Price', amount: 1000000, date: new Date('November 15,2026') },
    { title: 'Car Insurance', amount: 999.1, date: new Date('January 15,2035') },
    { title: 'Car Repair', amount: 500, date: new Date('December 15,2030') },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}