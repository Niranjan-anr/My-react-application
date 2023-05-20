import './Itemexpense.css';
import ItemDate from './DateOfItemExpense';

function ItemExpense(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ItemDate date={props.date} />
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div> {/* Update props.cost to props.amount */}
    </div>
  );
}

export default ItemExpense;
