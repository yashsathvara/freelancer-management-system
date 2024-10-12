import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarChart.css'; // Import custom CSS

const data = [
  { month: 'Jan', earnings: 5000 },
  { month: 'Feb', earnings: 7000 },
  { month: 'Mar', earnings: 3000 },
  { month: 'Apr', earnings: 6000 },
  { month: 'May', earnings: 8000 },
  { month: 'Jun', earnings: 4000 },
];

const BarChartComponent = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
          <Legend />
          <Bar dataKey="earnings" fill="#4f78f7" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
