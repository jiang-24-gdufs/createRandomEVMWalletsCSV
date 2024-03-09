const path = require('path');
const ethers = require('ethers');
const createObjectCsvWriter = require('csv-writer').createObjectCsvWriter;

const defaultOptions = {
  number: 100,
  path: './wallet.csv',
  index: true,
  privateKeyProps: 'privateKey',
  addressProps: 'address'
}
const mergeOptions = (options) => {
  return { ...defaultOptions, ...options }
}
function createEVMWalletCsv(options) {
  if (Number.isFinite(options)) {
    options = { number: options }
  }
  const { number, path, index, privateKeyProps, addressProps } = mergeOptions(options)
  const data = Array(number).fill('_').map((_, i) => {
    const wallet = ethers.Wallet.createRandom()
    const { privateKey, address } = wallet
    const result = {
      privateKey: privateKey,
      address: address
    }
    if (index) {
      result.index = i
    }
    return result
  })

  const header = index ? [{ id: 'index', title: 'index' }] : []
  const csvWriter = createObjectCsvWriter({
    path: path,
    header: [
      ...header,
      { id: 'address', title: privateKeyProps },
      { id: 'privateKey', title: addressProps },
    ],
  });

  csvWriter.writeRecords(data)
  return data
}
createEVMWalletCsv({
  number: 10,
  path: './wallet.csv',
  index: false,
  privateKeyProps: 'pk',
  addressProps: 'addr'
})
module.exports = createEVMWalletCsv;
