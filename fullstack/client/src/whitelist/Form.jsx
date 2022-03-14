import React, { useState } from "react";

const allAddresses = [
  "0x02F20212aE16B71c3c3B8846fb8Da4c8F3dFd8cc",
  "0xbAAd21C6F5AcB111255549Cf53EeE0C794aA0C36",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x6E067EF089deeb1Afda5427B65e92945B3E57aFC",
  "0x5774F5471f6638bb349F7d2AA29DB828aDFE0Fa0",
  "0x9E11c3913360DeD1063efb566C3A1Af8b245d475",
];
const Form = () => {
  const [wAddress, setWAddress] = useState("");

  const handleChange = (event) => {
    setWAddress(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(allAddresses);
    allAddresses.push(wAddress);
    setWAddress("");
    console.log(allAddresses);
  };

  const _createMerkleTree = () => {
    fetch("http://localhost:3001/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allAddresses),
    });
  };

  return (
    <div>
      <form>
        <label>Wallet Address</label>
        <input type="text" value={wAddress} onChange={handleChange}></input>
        <button type="submit" onClick={handleClick}>
          Add new Address
        </button>
      </form>
      {/* List of all addresses */}
      <div>
        <h1>whitelist Addresses</h1>
        <ul>
          {allAddresses.map((address, id) => {
            return <li key={id}>{address}</li>;
          })}
        </ul>
      </div>
      <button onClick={_createMerkleTree}>Create Merkle Tree</button>
    </div>
  );
};

export default Form;
