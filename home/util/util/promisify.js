/**
 * util.promisify(original)
 * original <Function>
 * Returns <Function>
*/

const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

stat('.').then(stats => {
    console.log(stats);
}).catch(err => {
    console.log(err);
});


console.log(fs.stat);