import { ApiPromise, WsProvider } from '@polkadot/api';
import { parachains } from './paraInfo';

async function pollCrowdloansFromKusama() {
  // Construct
  const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  console.log(api.genesisHash.toHex());
  const lastHeader = await api.rpc.chain.getHeader();
  const blockheight = lastHeader.number;
  console.log(`last block #${blockheight}`);
  const query = await api.query.crowdloan.funds.entries();
  const data = query
    .filter(([key, para]) => +para.unwrap().end.toString() > blockheight)
    .map(([key, para]) => {
      const id = key.args.toString();
      const paraName = parachains.find(p => p.paraId === +id)?.info ?? id;
      const cap = (+para.unwrap().cap.toString() / Math.pow(10, 12)).toFixed(2);
      const raised = (+para.unwrap().raised.toString() / Math.pow(10, 12)).toFixed(2);
      const collectable = (cap - raised).toFixed(2);

      return { id, paraName, cap, raised, collectable };
    })
    .sort((a, b) => b.raised - a.raised);
  // console.log(data);
  return data;
}

export function getCrowdloanData() {
  // console.log(parachains);
  return pollCrowdloansFromKusama().then(dat => dat);
}
