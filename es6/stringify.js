const fastJson = require('fast-json-stringify');

const stringify = fastJson({
    title: 'Example Schema',
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
        books: {
            type: 'array',
            items: {
                type: 'string',
                uniqueItems: true
            }
        }
    }
})

console.time('fast');
console.log(stringify({
    name: 'Starkwang',
    age: 23,
    books: ['C++ Primier', '響け！ユーフォニアム～']
}))
console.timeEnd('fast');


console.time('json');
console.log(stringify({
    name: 'Starkwang',
    age: 23,
    books: ['C++ Primier', '響け！ユーフォニアム～']
}))
console.timeEnd('json');