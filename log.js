const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/e43ce708610f4a8b8b2ed95b6bfb3c97');

const blockNumber =8589766; // Replace with the block number you want to extract data from

async function extractTransactionData(blockNumber) {
  const block = await web3.eth.getBlock(blockNumber);
  const transactions = block.transactions;

  const data = [];

  for (let i = 0; i < transactions.length; i++) {
    const tx = await web3.eth.getTransaction(transactions[i]);

    const txData = {
      from: tx.from,
      to: tx.to,
      value: web3.utils.fromWei(tx.value, 'ether'),
      gasPrice: web3.utils.fromWei(tx.gasPrice, 'gwei'),
      gas: tx.gas,
      nonce: tx.nonce,
      blockHash: tx.blockHash,
      blockNumber: tx.blockNumber,
      transactionHash: tx.hash,
      transactionIndex: tx.transactionIndex,
      input: tx.input,
      timestamp: block.timestamp
    };

    data.push(txData);
  }

  return data;
}

extractTransactionData(blockNumber)
  .then(data => {
    console.log(data);
    // Save data to JSON file
    const fs = require('fs');
    fs.writeFileSync('transaction_data.json', JSON.stringify(data));
  })
  .catch(error => console.log(error));

