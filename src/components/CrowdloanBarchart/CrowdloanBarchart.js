import React, { useEffect, useState } from 'react';
import { getCrowdloanData } from '../../services/pollKusama';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function CrowdloanBarchart() {
  const [crowdloanInfo, setCrowdloanInfo] = useState([]);

  useEffect(() => {
    getCrowdloanData().then(data => setCrowdloanInfo(data));
  }, []);

  console.log(crowdloanInfo);
  return (
    <div className="App">
      <BarChart
        width={500}
        height={300}
        data={crowdloanInfo.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="raised" stackId="a" fill="#8884d8" />
        <Bar dataKey="remaining" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
