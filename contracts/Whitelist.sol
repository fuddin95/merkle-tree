//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Whitelist {
    bytes32 merkleRoot = "dfs";

    mapping(address => bool) public whitelist;

    function setMerkleRoot(bytes32 _root) external {
        merkleRoot = _root;
    }

    function whitelistMint(bytes32[] calldata _merkleProof, address _claimAddr)
        external
        view
    {
        // check if the address is not claimed yet
        require(
            !whitelist[_claimAddr],
            "Cannot Mint Address has already been claimed"
        );

        bytes32 leaf = keccak256(abi.encode(_claimAddr));
        bool result = MerkleProof.verify(_merkleProof, merkleRoot, leaf);

        require(!result, "Invalid Wallet address");

        //Updating the mapping variable
        // whitelist[_claimAddr] = true;
    }
}
