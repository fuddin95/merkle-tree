import React, { useState } from "react";

export const CheckAddr = () => {
  const [wAddress, setWAddress] = useState("");
  const handleChange = (event) => {
    setWAddress(event.target.value);
  };
  const handleClick = (event) => {
    fetch("http://localhost:3001/checkwallet", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addr: wAddress }),
    });
  };
  return (
    <div>
      <h1>Check a wallet Address</h1>
      <form>
        <label>Wallet Address</label>
        <input type="text" value={wAddress} onChange={handleChange}></input>
        <button type="submit" onClick={handleClick}>
          Verify Address
        </button>
      </form>
    </div>
  );
};
