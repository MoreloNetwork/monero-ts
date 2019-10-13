/**
 * Monero subaddress model.
 */
class MoneroSubaddress {
  
  constructor(address) {
    this.state = {};
    this.setAddress(address);
  }
  
  getAccountIndex() {
    return this.state.accountIndex;
  }

  setAccountIndex(accountIndex) {
    this.state.accountIndex = accountIndex;
    return this;
  }

  getIndex() {
    return this.state.index;
  }

  setIndex(index) {
    this.state.index = index;
    return this;
  }
  
  getAddress() {
    return this.state.address;
  }

  setAddress(address) {
    this.state.address = address;
    return this;
  }

  getLabel() {
    return this.state.label;
  }

  setLabel(label) {
    this.state.label = label;
    return this;
  }

  getBalance() {
    return this.state.balance;
  }

  setBalance(balance) {
    this.state.balance = balance;
    return this;
  }

  getUnlockedBalance() {
    return this.state.unlockedBalance;
  }

  setUnlockedBalance(unlockedBalance) {
    this.state.unlockedBalance = unlockedBalance;
    return this;
  }

  getNumUnspentOutputs() {
    return this.state.numUnspentOutputs;
  }

  setNumUnspentOutputs(numUnspentOutputs) {
    this.state.numUnspentOutputs = numUnspentOutputs;
    return this;
  }

  isUsed() {
    return this.state.isUsed;
  }

  setIsUsed(isUsed) {
    this.state.isUsed = isUsed;
    return this;
  }

  toString() {
    return this.state.toString(0);
  }
  
  getNumBlocksToUnlock() {
    return this.state.numBlocksToUnlock;
  }

  setNumBlocksToUnlock(numBlocksToUnlock) {
    this.state.numBlocksToUnlock = numBlocksToUnlock;
    return this;
  }
  
  toString(indent) {
    let str = "";
    str += GenUtils.kvLine("Account index", this.getAccountIndex(), indent);
    str += GenUtils.kvLine("Subaddress index", this.getIndex(), indent);
    str += GenUtils.kvLine("Address", this.getAddress(), indent);
    str += GenUtils.kvLine("Label", this.getLabel(), indent);
    str += GenUtils.kvLine("Balance", this.getBalance(), indent);
    str += GenUtils.kvLine("Unlocked balance", this.getUnlockedBalance(), indent);
    str += GenUtils.kvLine("Num unspent outputs", this.getNumUnspentOutputs(), indent);
    str += GenUtils.kvLine("Is used", this.isUsed(), indent);
    str += GenUtils.kvLine("Num blocks to unlock", this.isUsed(), indent);
    return str.slice(0, str.length - 1);  // strip last newline
  }
}

module.exports = MoneroSubaddress;