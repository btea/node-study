const https = require('https');
const http = require('http');
const superagent = require('superagent');

const url = 'https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=2018-12-06&leftTicketDTO.from_station=BJP&leftTicketDTO.to_station=SHH&purpose_codes=ADULT';

const options = {
    hostname: 'kyfw.12306.cn',
    port: 443,
    path: '/otn/leftTicket/query?leftTicketDTO.train_date=2018-12-06&leftTicketDTO.from_station=BJP&leftTicketDTO.to_station=SHH&purpose_codes=ADULT',
    method: 'GET'
}

// http.createServer(function(request, response){
//     let data = '';
//     let req = https.request(options, function(res){
//         res.setEncoding('utf8');
//         res.on('data', function(chunk){
//             console.log(chunk);
//             data += chunk;
//         });
//         res.on('end', function(){
//             response.end(data);
//         })
//     });
//     req.on('error', function(e){
//         console.log('error!' + e.message);
//     })
//     req.end();
// }).listen(3000)

superagent.get(url).then(res => {
    let data = JSON.parse(res.text);
    console.log(data);
}).catch(err => {
    console.log(err);
})