import React, { useEffect, useState } from 'react';
import { getCrowdloanData } from '../../services/pollKusama';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function CrowdloanBarchart() {
  const [crowdloanInfo, setCrowdloanInfo] = useState([]);
  const YLIM = 250000;
  useEffect(() => {
    getCrowdloanData().then(data => setCrowdloanInfo(data));
  }, []);

  console.log(crowdloanInfo);
  return (
    <div className="App">
      <h4 align="left">YLim cutoff: {YLIM}</h4>
      <BarChart
        width={800}
        height={600}
        data={crowdloanInfo}
        margin={{
          top: 20,
          right: 50,
          left: 50,
          bottom: 200,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="paraName" angle={-45} textAnchor="end" interval={0} />
        {/* <YAxis scale="log" domain={[0.01, 'auto']} allowDataOverflow /> */}
        <YAxis type="number" domain={[0, YLIM]} allowDataOverflow />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Bar dataKey="raised" stackId="a" fill="#8884d8" />
        <Bar dataKey="collectable" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
