import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const SaveExpenseDataHandler = enteredExpenseData => {          // enteredExpenseData brings values from ExpenseForm.js
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);        //from App.js
    };

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
       setIsEditing(true);
    }    
   
    const stopEditingHandler = () => {
        setIsEditing(false);

    }


return (
<div className="new-expense">
{!isEditing && <button type='button' onClick={startEditingHandler}> ADD EXPENSE HERE </button>}
{isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onCancel={stopEditingHandler}/> }
{/* we call this onSaveExpenseData from ExpenseForm.js */}
</div>
);
};
export default NewExpense;