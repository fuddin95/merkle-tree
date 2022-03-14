import React, { useEffect, useState } from "react";
import Form from "./whitelist/Form";
import "./App.css";
import { ConnectWallet } from "./whitelist/ConnectWallet";
import { CheckAddr } from "./whitelist/CheckAddr";
// import Greeter from "./contracts/";

function App() {
  const [userAddress, setUserAddress] = useState(null);

  // let selectedAddress;
  const _connectWallet = async () => {
    const [selectedAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (selectedAddress) {
      setUserAddress(selectedAddress);
    }
  };
  return (
    <div className="App">
      {!userAddress ? (
        <ConnectWallet connectWallet={_connectWallet} />
      ) : (
        "Dissconnect"
      )}

      <div>
        <Form />
      </div>
      <CheckAddr />
    </div>
  );
}

export default App;
