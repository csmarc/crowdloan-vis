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

const data = [
  {
    name: 'Page A',
    raised: 4000,
    remaining: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    raised: 3000,
    remaining: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    raised: 2000,
    remaining: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    raised: 2780,
    remaining: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    raised: 1890,
    remaining: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    raised: 2390,
    remaining: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    raised: 3490,
    remaining: 4300,
    amt: 2100,
  },
];

export function getCrowdloanData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data });
    }, 1500);
  });
}
