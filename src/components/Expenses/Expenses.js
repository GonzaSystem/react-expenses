import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setYear] = useState("2022");
    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    const filterChangeHandler = (year) => {
        setYear(year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    year={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
