'use strict';
let request = require('request');
let fs = require('fs');
let httpStream = request({
    method: 'GET',
    url: 'https://baobao-3d.bj.bcebos.com/16-0-205.shuimian.mp4'
});

let writeStream = fs.createWriteStream('/dev/null');
httpStream.pipe(writeStream);

let totalLength = 0;
httpStream.on('response', res => {
    console.log('response headers is:' , res.headers);
});
httpStream.on('data',chunk => {
    totalLength += chunk.length;
    console.log('received data size:' + totalLength + 'KB');
})

writeStream.on('close', () => {
    console.log('download finished');
})