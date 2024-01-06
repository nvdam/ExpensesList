import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
const Expenses = props => {
  const [filteredYear, setFilterYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
});
  return (
    <div className='expenses'>
      <ExpenseFilter 
      selected={filteredYear}
      onChangeFilter = {filterChangeHandler} />
         {filteredExpenses.length === 0 ? (
           <p> NO Data</p>
            ):(
         filteredExpenses.map((expense) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}  
          /> 
          )))}

    </div>
  );
};
export default Expenses;