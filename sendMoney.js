const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "multiply sudden toast dumb border direct follow marriage egg myself idea trash";
const provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/12e8d8b53cee48ef91b8ddaeb116ede3");
const web3 = new Web3(provider);

send = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0])
    let account0balance = await web3.eth.getBalance(accounts[0]);
    console.log(account0balance)
    const str = 'xxx 我好喜欢你';
    let data = Buffer.from(str).toString('hex');
    data = '0x' + data;
    console.log(data)
    await web3.eth.sendTransaction({
        from: accounts[0],
        to: '0xD736B42B10df0391f599eF6AF3941B912E6b9466',
        value: '1000000000000000000',
        data: data
    });
    console.log("1")
     // account0balance = await web3.eth.getBalance(accounts[0]);
    //  account0balance1 = await web3.eth.getBalance("0xD736B42B10df0391f599eF6AF3941B912E6b9466");
    //
    //  console.log('account0balance:'+account0balance+'wei');
    //  console.log('account0balance:'+account0balance1+'wei');
};

send();