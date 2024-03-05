// index.js

// 定义钱包类
class Wallet {
  constructor(balance = 0) {
    this.balance = balance;
  }

  // 存款方法
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `成功存入 ${amount} 元，当前余额为 ${this.balance} 元。`;
    } else {
      return "存款金额必须大于0。";
    }
  }

  // 取款方法
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `成功取出 ${amount} 元，当前余额为 ${this.balance} 元。`;
    } else {
      return "取款金额必须大于0且不能超过当前余额。";
    }
  }

  // 获取余额方法
  getBalance() {
    return `当前余额为 ${this.balance} 元。`;
  }
}

// 创建一个新的钱包实例
const myWallet = new Wallet();

// 示例用法
console.log(myWallet.deposit(100)); // 存款 100 元
console.log(myWallet.withdraw(50)); // 取款 50 元
console.log(myWallet.getBalance()); // 获取余额
