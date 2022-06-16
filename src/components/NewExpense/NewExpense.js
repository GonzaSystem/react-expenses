import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const createExpenseHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={createExpenseHandler} />
        </div>
    );
} 

export default NewExpense;