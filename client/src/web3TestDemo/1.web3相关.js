let Web3 = require('web3');

let web3 = new Web3('http://127.0.0.1:9545');


web3.eth.getAccounts((e, result) => {
});

web3.eth.getAccounts().then(async (accounts) => {
    console.log(accounts[0]);
    let balance = await web3.eth.getBalance(accounts[0]);
    console.log(balance);
    web3.eth.getBlock(1, function(error, result){
        if(!error)
            console.log(JSON.stringify("no error", result));
        else
            console.error("error", error);
    });
    let result = web3.utils.toHex('zhangsan');
    console.log(result);
});

let getAccount = async () => {
    let accounts = await web3.eth.getAccounts();

    let result = await web3.eth.sendTransaction({
            from: accounts[0],
            to: accounts[1],
            value: web3.utils.toWei('10', 'ether')
        }
    );

    return accounts[0];
};

getAccount();
