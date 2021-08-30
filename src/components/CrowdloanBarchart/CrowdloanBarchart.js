import React, { useEffect, useState } from 'react';
import { getCrowdloanData } from '../../services/pollKusama';

export default function CrowdloanBarchart() {
  const [crowdloanInfo, setCrowdloanInfo] = useState({});

  useEffect(() => {
    getCrowdloanData().then(data => setCrowdloanInfo(data));
  }, []);

  console.log(crowdloanInfo[0]);
  const list = crowdloanInfo.map(para => <li>Continent: {para.name}</li>);
  console.log(list);
  return (
    <div>
      <h2>Crowdloan Information</h2>
      <ul>{list}</ul>
    </div>
  );
}

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
