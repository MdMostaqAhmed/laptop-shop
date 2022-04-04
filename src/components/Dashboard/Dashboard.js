import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <div className="dashboard">
      <LineChart width={400} height={500} data={chartData}>
        <Line dataKey={"sell"}></Line>
        <Line dataKey={"investment"}></Line>
        <XAxis dataKey="month"></XAxis>
        <Tooltip></Tooltip>
        <YAxis></YAxis>
      </LineChart>

      <BarChart width={730} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="investment" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
