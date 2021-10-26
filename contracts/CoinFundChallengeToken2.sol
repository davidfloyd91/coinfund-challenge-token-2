// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoinFundChallengeToken2 is ERC20 {
    using SafeMath for uint256;

    uint256 public initialMintAmount = 1_000_000 * 10 ** uint(decimals());
    uint256 public initialIndex = 1 * 10 ** 18;
    uint256 public currentIndex = initialIndex;

    constructor(
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialMintAmount);
    }

    function updateCurrentIndex() internal {
        uint256 newIndex = currentIndex.mul(101).div(100);
        currentIndex = newIndex;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        bool isMint = from == address(0);
        if (!isMint) {
            updateCurrentIndex();
        }
        super._beforeTokenTransfer(from, to, amount);
    }

    function balanceOf(address account) public view override returns (uint256) {
        uint256 rawBalanceOf = super.balanceOf(account);
        return rawBalanceOf.mul(currentIndex).div(initialIndex);
    }
}
