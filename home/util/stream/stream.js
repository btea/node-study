/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/stream.md
 * http://nodejs.cn/api/stream.html
 * 
 * nodejs的核心模块，基本上都是stream的的实例，比如process.stdout、http.clientRequest。
 * 对于大部分的nodejs开发者来说，平常并不会直接用到stream模块，只需要了解stream的运行机制即可（非常重要!!!!）。
 * 而对于想要实现自定义stream实例的开发者来说，就得好好研究stream的扩展API了，比如gulp的内部实现就大量用到了自定义的stream类型。
*/

const fs = require('fs');

fs.createReadStream('./sample.txt').pipe(process.stdout);

/**
 * Stream分类：
 * 在nodejs中，有四种stream类型：
 *    Readable：用来读取数据，比如fs.createReadStream();
 *    Writable：用来写数据，比如fs.createWriteStream();
 *    Duplex：可读+可写，比如net.Socket();
 *    Transform：在读写的过程中，可以对数据进行修改，比如 zlib.createDeflate()（数据压缩/解压）。
*/