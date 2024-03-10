# createEVMWalletCsv

这个模块提供了一个 `createEVMWalletCsv` 函数，用于生成指定数量的 Ethereum 钱包，并将它们保存到 CSV 文件中。

## 安装

```bash
npm install create-evm-wallets-csv
```

## 使用

```javascript
const createEVMWalletCsv = require('create-evm-wallets-csv');

createEVMWalletCsv();
```

在这个示例中，createEVMWalletCsv 函数会生成 100 个钱包，并将它们保存到 ./wallet.csv 文件中。每个钱包都有一个私钥和一个地址，它们在 CSV 文件中的列名分别是 private key 和 address。

## API 
createEVMWalletCsv 函数接受一个配置对象作为参数，这个对象有以下属性：

- number：要生成的钱包的数量。默认值是 100。
- path：CSV 文件的路径。默认值是 ./wallet.csv。
- index：是否在 CSV 文件中包含一个索引列。默认值是 true。
- privateKeyProps：私钥在 CSV 文件中的列名。默认值是 'privateKey'。
- addressProps：地址在 CSV 文件中的列名。默认值是 'address'。

你可以通过传入一个对象来覆盖这些默认值。例如，以下代码会生成 10 个钱包，并将它们保存到 ./myWallets.csv 文件中，每个钱包都有一个私钥（列名是 'pk'）和一个地址（列名是 'addr'）：

```javascript
createEVMWalletCsv({
  number: 10,
  path: './myWallets.csv',
  privateKeyProps: 'pk',
  addressProps: 'addr'
});
```
