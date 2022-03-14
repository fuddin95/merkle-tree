import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export const MakeMerkleTree = (whiteListAddresses) => {
  const leafNodes = whiteListAddresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true,
  });

  // console.log("Leaf Nodes : ", leafNodes);
  // console.log("Merkle Tree :", merkleTree);
  return merkleTree;
};

export const getHexProof = (checkAddress, currentMerkleTree) => {
  const hexProof = currentMerkleTree.getHexProof(keccak256(checkAddress));
  return hexProof;
};

export const verifyAddr = (claimAddr, currentHexProof, currentMerkleTree) => {
  const result = currentMerkleTree.verify(
    currentHexProof,
    keccak256(claimAddr),
    currentMerkleTree.getRoot()
  );
  return result;
};

// const whiteListAddresses = [
//   "0x02F20212aE16B71c3c3B8846fb8Da4c8F3dFd8cc",
//   "0xbAAd21C6F5AcB111255549Cf53EeE0C794aA0C36",
//   "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
//   "0x6E067EF089deeb1Afda5427B65e92945B3E57aFC",
//   "0x5774F5471f6638bb349F7d2AA29DB828aDFE0Fa0",
//   "0x9E11c3913360DeD1063efb566C3A1Af8b245d475",
// ];
