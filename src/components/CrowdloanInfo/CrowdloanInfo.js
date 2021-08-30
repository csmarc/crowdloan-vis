import React, { useEffect, useState } from 'react';
import { getCrowdloanData } from '../../services/pollKusama';

export default function CrowdloanInfo() {
  const [crowdloanInfo, setCrowdloanInfo] = useState({});

  useEffect(() => {
    getCrowdloanData().then(data => setCrowdloanInfo(data));
  }, []);

  return (
    <div>
      <h2>Crowdloan Information</h2>
      <ul>
        <li>Continent: {crowdloanInfo.continent}</li>
        <li>Length: {crowdloanInfo.length}</li>
        <li>Outflow: {crowdloanInfo.outflow}</li>
      </ul>
    </div>
  );
}
