// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyOpenEdition is ERC1155, Ownable {

    string public name = "MyOpenEdition";
    string public symbol = "MOE";


    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmPhjMEXfoDzq6atJ6n2UPjMVZUy1gDT2BiF5bpBkpWudY") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint()
        public 
    {
        require(balanceOf(msg.sender, 1) == 0 , "Max Mint per wallet reached");
        _mint(msg.sender, 1, 1, "");
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
}
