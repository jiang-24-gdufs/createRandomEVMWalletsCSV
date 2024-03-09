const ethers = require('ethers');
const createEVMWalletCsv = require('./index');
const fs = require('fs');
const csv = require('csv-parser');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('createEVMWalletCsv', () => {
  // test('should create the correct number of wallets', () => {
  //   const wallets = createEVMWalletCsv(5);
  //   expect(wallets.length).toBe(5);
  // });

  // test('each wallet should have a index, a private key and an address', () => {
  //   const wallets = createEVMWalletCsv();
  //   expect(wallets.length).toBe(100);
  //   wallets.forEach((wallet, i) => {
  //     expect(wallet).toHaveProperty('privateKey');
  //     expect(wallet).toHaveProperty('address');
  //     expect(wallet).toHaveProperty('index', i);
  //   });
  // });

  // test('each wallet should have an index if index parameter is false', () => {
  //   const wallets = createEVMWalletCsv({ index: false });
  //   wallets.forEach((wallet, i) => {
  //     expect(wallet).not.toHaveProperty('index');
  //   });
  // });

  // test('each wallet should have a pk prop and an addr prop ', () => {
  //   const wallets = createEVMWalletCsv({
  //     privateKeyProps: 'pk',
  //     addressProps: 'addr'
  //   });
  //   expect(wallets.length).toBe(100);
  //   wallets.forEach((wallet, i) => {
  //     expect(wallet).toHaveProperty('pk');
  //     expect(wallet).toHaveProperty('addr');
  //   });
  // });


  test('should read and parse the CSV file correctly', async done => {
    const stamp = Date.now();
    const csvpath = `./w1-${stamp}.csv`
    console.log(csvpath)
    createEVMWalletCsv({
      number: 10,
      path: csvpath,
    });
    // Wait for 2 seconds before reading the file
    // await sleep(200);

    const results = [];
    const fs = require('fs');

    fs.watchFile(csvpath, (curr, prev) => {
      console.log('File changed');
      // You can add your code here to handle the file change

      fs.createReadStream(csvpath)
        .pipe(csv())
        .on('data', (data) => console.log(data.index), results.push(data))
        .on('end', () => {
          console.log(results)
          expect(results.length).toBeGreaterThan(0);
          expect(results.length).toBe(10);
          results.forEach((row, i) => {
            expect(row).toHaveProperty('index');
            expect(wallet).toHaveProperty('privateKey');
            expect(wallet).toHaveProperty('address');
          });
          done();
        });
    });

  }, 10000);
});
