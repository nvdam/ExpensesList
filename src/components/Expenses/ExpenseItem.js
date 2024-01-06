import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
function ExpenseItem(props) {
    const [ , setTitle] = useState(props.title);   
     
   const EventHandler = () => {
    console.log('Clicked!!!');
    setTitle('Updated......');
    console.log(props.title);
    
   }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'> 
                <h2> {props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={EventHandler}>Edit</button>
            </div>
        </div>
    );
}
export default ExpenseItem;