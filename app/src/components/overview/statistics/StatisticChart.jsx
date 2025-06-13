import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '17 Sun', thisWeek: 240000, lastWeek: 50000 },
  { name: '18 Mon', thisWeek: 120000, lastWeek: 100000 },
  { name: '19 Tue', thisWeek: 150000, lastWeek: 130000 },
  { name: '20 Wed', thisWeek: 180000, lastWeek: 160000 },
  { name: '21 Thu', thisWeek: 200000, lastWeek: 190000 },
  { name: '22 Fri', thisWeek: 220000, lastWeek: 210000 },
  { name: '23 Sat', thisWeek: 245000, lastWeek: 230000 },
];

function StatisticChart() {
  return (
    <div style={{ width: 800, height: 180 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
		  <XAxis tick={{ fontSize: 14, color: '#9F9F9F' }} />


		  <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip />
          <Legend wrapperStyle={{ top: 0, left: '50%', transform: 'translateX(-25%)', fontSize: '12px', color: '#525256'}} />
          <Bar dataKey="thisWeek" fill="#299D91" name="This week" barSize={16} />
		  <Bar dataKey="lastWeek" fill="#E8E8E8" name="Last week" barSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatisticChart;
