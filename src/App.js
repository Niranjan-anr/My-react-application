
import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/expenses';
import NewExpense from './components/expenses/NewExpense';

let initialItems = [
  { id: 'e1', name: "shoe", price: "20,020.21", date: new Date(2023, 2, 3) },
  { id: 'e2', name: "watch", price: "80,023.232", date: new Date(2023, 5, 22) },
  { id: 'e3', name: "cargos", price: "40,031.32", date: new Date(2022, 3, 12) }
];

function App() {
  const [expenses, setExpenses] = useState(initialItems);

  const addExpenseHandler = (expense) => {
    const newExpense = {
      id: Math.random().toString(),
      name: expense.title,
      price: expense.price,
      date: expense.date,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  
 
  return (
    <div className="App">
      <Expenses Items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
