import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as Charts} from "chart.js/auto";

const LineChart = ({chartData}) => {
    return (
        <div>
            <Line data={chartData}></Line>
        </div>
    );
};

export default LineChart;