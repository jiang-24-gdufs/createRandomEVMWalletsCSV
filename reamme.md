# createEVMWalletCsv

This module provides a createEVMWalletCsv function, which generates a specified number of Ethereum wallets and saves them to a CSV file.

## Installation

```bash
npm install create-evm-wallet-csv
```

## Usage

```javascript
const createEVMWalletCsv = require('create-evm-wallet-csv');

createEVMWalletCsv();
```

In this example, the createEVMWalletCsv function will generate 10 wallets and save them to the ./wallet.csv file. Each wallet has a private key and an address, and their column names in the CSV file are pk and addr, respectively.

## API 
The createEVMWalletCsv function accepts a configuration object as a parameter, which has the following properties:


- number: The number of wallets to generate. The default value is 100.
- path: The path of the CSV file. The default value is ./wallet.csv.
- index: Whether to include an index column in the CSV file. The default value is true.
- privateKeyProps: The column name of the private key in the CSV file. The default value is 'privateKey'.
- addressProps: The column name of the address in the CSV file. The default value is 'address'.

You can override these default values by passing in an object. For example, the following code will generate 10 wallets and save them to the ./myWallets.csv file, and each wallet has a private key (the column name is 'pk') and an address (the column name is 'addr'):

```javascript
createEVMWalletCsv({
  number: 10,
  path: './myWallets.csv',
  privateKeyProps: 'pk',
  addressProps: 'addr'
});
```
