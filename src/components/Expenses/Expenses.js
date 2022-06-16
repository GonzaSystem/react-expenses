import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filteredYear, setYear] = useState("2022");
    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    const filterChangeHandler = (year) => {
        setYear(year);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                year={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}
        </Card>
    );
};

export default Expenses;
