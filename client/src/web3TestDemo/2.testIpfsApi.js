let api = require('ipfs-api');
let ipfs = ipfsAPI('localhost','5001',{protocol:'http'});
//启动ipfs daemon

let ipfsTest = async () => {

    //转换内容
    let content = ipfs.types.Buffer.from('yangtao');
    let results = await ipfs.files.add(content);
    let hash = results[0].hash; // "Qm...WW"

    console.log('results :', results);
    console.log('hash  :', hash);


    let info = await ipfs.cat(hash);
    console.log('info :', info.toString());

    let files = await ipfs.ls('Qme5g4DYXkUazCsunsVZoVZYsN1B8QpJ2GX5mG6UmVRgAG');

    files.forEach(file => {
        console.log('file :', file);
    })

}

ipfsTest()