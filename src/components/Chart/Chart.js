import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const max = Math.max(...props.items.map((dataPoint) => dataPoint.value));

    return (
        <div className="chart">
            {props.items.map((item) => (
                <ChartBar
                    key={item.label}
                    value={item.value}
                    maxValue={max}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default Chart;
