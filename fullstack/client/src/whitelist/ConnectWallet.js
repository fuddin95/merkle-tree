import React from "react";
import { ethers } from "ethers";
export const ConnectWallet = ({ connectWallet }) => {
  return (
    <div>
      <button className="btn btn-warning" type="button" onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};
