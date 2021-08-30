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

import './App.css';
import CrowdloanBarchart from '../CrowdloanBarchart/CrowdloanBarchart';

function App() {
  return (
    <div className="App">
      <h1>Kusama Crowdloans</h1>
      <CrowdloanBarchart />
    </div>
  );
}

export default App;
