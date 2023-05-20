import ItemExpense from "../Itemexpense";
import './ExpensesList.css';

const ExpensesList = (props) => {
  let expenseContent = <p>No expenses found</p>;

  if (props.Items.length === 0) {
    return expenseContent;
  }

  return (
    <div className="expenses-list">
      {props.Items.map((expense) => (
        <ItemExpense
          key={expense.id}
          title={expense.name}
          amount={expense.price} 
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
