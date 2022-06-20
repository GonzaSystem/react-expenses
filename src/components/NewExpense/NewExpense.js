import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isAddingExpense, setAddingExpense] = useState(false);

    const createExpenseHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(data);
        toggleAddingExpense();
    };

    const toggleAddingExpense = () => {
        setAddingExpense((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="new-expense">
            {!isAddingExpense ? (
                <button onClick={toggleAddingExpense}>Create Expense</button>
            ) : (
                <ExpenseForm
                    onCancel={toggleAddingExpense}
                    onAddExpense={createExpenseHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
