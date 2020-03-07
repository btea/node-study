const http = require('http')
const cheerio = require('cheerio')
const superagent = require('superagent')
const fs = require('fs')
let page = 1
let path = `http://www.bimibimi.tv/bangumi/289/play/1/${page}/`

superagent.get(path).end((err, obj) => {
	if (err) return null
	// console.log(obj.text)
	let $ = cheerio.load(obj.text)
	let str = obj.text.replace(/<script.*>.+?<\/script>/g, '')
	fs.writeFile('./index.html', str, 'utf-8', err => {
		if (err) {
			console.log('fail')
		} else {
			console.log('success')
		}
	})
})