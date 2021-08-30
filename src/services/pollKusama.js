import { ApiPromise, WsProvider } from '@polkadot/api';

async function pollCrowdloansFromKusama() {
  // Construct
  const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  console.log(api.genesisHash.toHex());

  const query = await api.query.crowdloan.funds.entries();
  const data = query.map(([key, account]) => {
    const id = key.args.toString();
    const raised = +account.unwrap().raised.toString() / Math.pow(10, 12);
    const cap = +account.unwrap().cap.toString() / Math.pow(10, 12);
    const remaining = cap - raised;
    return { id, raised, remaining };
  });
  // console.log(data);
  return data;
}

export function getCrowdloanData() {
  return pollCrowdloansFromKusama().then(dat => dat);
}
