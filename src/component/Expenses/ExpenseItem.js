import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  // first of all i create these variable for ExpenseItem data
  // const expenseaDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // const [title, setTitle] = useState(props.title)
  // const ClickHandler = ()=>{
  //   setTitle("Updated!!")
  //     console.log(title)
      
  return (
    // <div className="expense-item">
    //     <div>{expenseaDate.toISOString()}</div>
    //     <div className="expense-item__description"><h2>${expenseTitle}</h2>
    //         <div className="expense-item__price">
    //             {expenseAmount}
    //         </div>
    //     </div>
    // </div>

    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  </li>
  );
  };

export default ExpenseItem;
