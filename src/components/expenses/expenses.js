
import ExpensesList from './ExpensesList';
import './Expenses.css'
import ExpensesChart from './expensesChart';
import ExpensesFilter from '../../ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.Items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList Items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
