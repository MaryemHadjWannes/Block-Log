# Block-Log

## Description
JavaScript code that using the Web3.js library and the Infura API to extract transaction data from a specific block on the ***Goerli network***.


The Web3 constructor takes a provider URL as an argument to specify the network you want to connect to. In this case, the provider URL is https://goerli.infura.io/v3/e43ce708610f4a8b8b2ed95b6bfb3c97.
```javascript
const web3 = new Web3('https://goerli.infura.io/v3/e43ce708610f4a8b8b2ed95b6bfb3c97');
```

The ***extractTransactionData*** function takes a block number as an argument and returns an array of transaction data for all the transactions in that block. The function loops through each transaction in the block and uses the ***web3.eth.getTransaction*** method to retrieve transaction details. The method returns a Promise that resolves to a transaction object containing all the details of the transaction, such as the sender address, recipient address, transaction amount, gas price, gas limit, and more.

The ***txData*** object is then constructed using the transaction details returned by ***web3.eth.getTransaction***. The ***web3.utils.fromWei*** method is used to convert the transaction value from ***Wei*** to ***Ether*** and the gas price from ***Wei*** to ***Gwei*** for easier readability. The ***txData*** object also includes additional details such as the block hash, block number, transaction hash, transaction index, input data, and timestamp.

The function returns an array of ***txData*** objects, which is then logged to the console and saved to a JSON file named ***'transaction_data.json'*** using the Node.js fs module. The ***fs.writeFileSync*** method is used to write the JSON data to the file.

To use this code, replace the blockNumber variable with the block number you want to extract transaction data from, and run the code using ***Node.js***. For example, if you want to extract transaction data from block number ***8589766***, you can run the code using the command ***"node log.js"***. The JSON file containing the transaction data will be saved to the current working directory.
```javascript
const blockNumber =8589766; // Replace with the block number you want to extract data from
```
