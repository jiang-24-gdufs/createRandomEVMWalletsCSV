const ethers = require('ethers');
const createEVMWalletCsv = require('./index');
const fs = require('fs');
const csv = require('csv-parser');

describe('createEVMWalletCsv', () => {
  test('should read and parse the CSV file correctly', async () => {
    const stamp = Date.now();
    const csvpath = `./w1-${stamp}.csv`
    await createEVMWalletCsv({
      number: 10,
      path: csvpath,
    });

    const results = [];

    fs.createReadStream(csvpath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        expect(results.length).toBeGreaterThan(0);
        expect(results.length).toBe(10);
        results.forEach((row, i) => {
          expect(row).toHaveProperty('index', i.toString());
          expect(row).toHaveProperty('privateKey');
          expect(row).toHaveProperty('address');
        });
      });

  });

  test('should read and parse the CSV file with custom parameter correctly', async () => {
    const stamp = Date.now();
    const csvpath = `./w2-${stamp}.csv`
    await createEVMWalletCsv({
      path: csvpath,
      privateKeyProps: 'pk',
      addressProps: 'addr'
    });

    const results = [];

    fs.createReadStream(csvpath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        expect(results.length).toBe(100);
        results.forEach((row) => {
          expect(row).toHaveProperty('pk');
          expect(row).toHaveProperty('addr');
        });
      });

  });
});
