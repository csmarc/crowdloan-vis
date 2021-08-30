// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { ApiPromise, WsProvider } from '@polkadot/api';

// async function main() {
//   // Construct
//   const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');
//   const api = await ApiPromise.create({ provider: wsProvider });

//   console.log(api.genesisHash.toHex());

//   const query = await api.query.crowdloan.funds.entries();
//   // query.forEach(([key, account]) => {
//   //   console.log(`${key.args}; ${account.unwrap().raised.toString()}`);
//   // });
//   const data2 = query.map(([key, account]) => {
//     const id = key.args.toString();
//     const raised = +account.unwrap().raised.toString() / Math.pow(10, 12);
//     const cap = +account.unwrap().cap.toString() / Math.pow(10, 12);
//     return { id, raised, cap };
//   });
//   console.log(data2);
//   // return data2;
// }
// main().finally();

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="raised" stackId="a" fill="#8884d8" />
//         <Bar dataKey="remaining" stackId="a" fill="#82ca9d" />
//       </BarChart>
//     </div>
//   );
// }

// export default App;

import './App.css';
import CrowdloanInfo from '../CrowdloanInfo/CrowdloanInfo';

function App() {
  return (
    <div className="App">
      <h1>Kusama Crowdloans</h1>
      <CrowdloanInfo />
    </div>
  );
}

export default App;
