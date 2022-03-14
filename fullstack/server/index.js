import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MakeMerkleTree, getHexProof, verifyAddr } from "./merkle";
import Web3 from "web3";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

let web3 = new Web3("ws://localhost:8545");
web3.setProvider("ws://localhost:8545");
// web3.eth.getAccounts(console.log);

//saves the current merkle tree
let currentMerkleTree, currentHexProof;

//API routes

app.get("/", (req, res) => {
  res.json({ message: "from root route " });
});

app.post("/create", (req, res) => {
  const addressList = req.body;
  currentMerkleTree = MakeMerkleTree(addressList);
  console.log("Merkle tree created");
});

app.post("/checkwallet", (req, res) => {
  const checkAddr = req.body.addr;
  // console.log("Current Mekrle Tree", currentMerkleTree.toString());
  currentHexProof = getHexProof(checkAddr, currentMerkleTree);
  // console.log("Current Hex Proof:  ", currentHexProof);
  const result = verifyAddr(checkAddr, currentHexProof, currentMerkleTree);
  console.log(`The address : '${checkAddr} is whitelisted : ${result}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
