## 关于字符编码解码
###### [markdown语法说明](https://www.jianshu.com/p/191d1e21f7ed)
在网络通信中，传输的都是二进制的比特位，不管发送的是图片还是文本，采用的语言是中文还是英文。  
栗子，客户端向服务端发送“你好”
> 客户端 --- 你好 ---> 服务端    

中间包含两个关键步骤，分别对应是编码、解码。  
  1、客户端：将"你好"这个字符串，编码成计算机网络需要的二进制比特位。  
  2、服务端：将接收到的二进制比特位，解码成"你好"这个字符串。  
总结一下：
  1、编码：将需要传送的数据，转成对应的二进制比特位。  
  2、解码：将二进制比特位，转成原始的数据。  

## 关于字符集和字符编码
上面提到字符、二进制的转换问题。既然两者可以互相转换，也就是说存在明确的转换规则，可以实现**字符**<->**二进制**的相互转换。

这里提到的转换规则，其实就是我们经常听到的字符集&字符编码。

**字符集**是一系列字符（文字、标点符号等）的集合。字符集有很多，常见的有ASCII、Unicode、GBK等。不同字符集主要的区别在于包含字符个数的不同。

了解了字符集的概念后，接下来介绍下字符编码。

字符集告诉我们支持哪些字符，但具体字符怎么编码，是由**字符编码**决定的。比如Unicode字符集，支持的字符编码有UTF8(常用)、UTF16、UTF32。

概括一下：  
  字符集：字符的集合，不同的字符集合包含的字符数不同。
  字符编码：字符集中字符的实际编码方式。
  一个字符集可能有多种字符编码方式。

可以把字符编码看成一个映射表，客户端、服务端就是根据这个映射表，来实现字符跟二进制的编解码转换。

举个例子，"你"这个字符，在UTF8编码中，占据三个字节0xe4 0xbd 0xa0，而在GBK编码中，占据两个字节0xc4 0xe3。

## 字符编码解码栗子
上面已经提到了字符编解码所需的基础知识。下面我们看一个简单的例子，这里借助了icon-lite这个库来帮助我们实现编解码的操作。

可以看到，在字符编码时，我们采用了gbk。在解码时，如果同样采用gbk，可以得到原始的字符。而当我们解码时采用utf8时，则出现了乱码。

var iconv = require('iconv-lite');

var oriText = '你';

var encodedBuff = iconv.encode(oriText, 'gbk');  
console.log(encodedBuff);  
// <Buffer c4 e3>

var decodedText = iconv.decode(encodedBuff, 'gbk');  
console.log(decodedText);  
// 你

var wrongText = iconv.decode(encodedBuff, 'utf8');  
console.log(wrongText);  
// ��

## 实际栗子：服务端解码
通常我们需要处理编解码的场景有文件读写、网络请求处理。这里距网络请求的例子，介绍如何在服务端进行编解码。

假设我们运行着如下http服务，监听来自客户端的请求。客户端传输数据时采用了gbk编码，而服务端默认采用的是utf8编码。

如果此时采用默认的utf8对请求进行解码，就会出现乱码，因此需要特殊处理。

服务端代码如下（为简化代码，这里跳过了请求方法、请求编码的判断）

    var http = require('http');
    var iconv = require('iconv-lite');

    // 假设客户端采用post方法，编码为gbk  
    var server = http.createServer(function (req, res) {
        var chunks = [];
        
        req.on('data', function (chunk) {
            chunks.push(chunk)
        });

        req.on('end', function () {
            chunks = Buffer.concat(chunks);

            // 对二进制进行解码
            var body = iconv.decode(chunks, 'gbk');
            console.log(body);

            res.end('HELLO FROM SERVER');
        });

    });

    server.listen(3000);
对应的客户端代码如下：

    var http = require('http');
    var iconv = require('iconv-lite');

    var charset = 'gbk';

    // 对字符"你"进行编码
    var reqBuff = iconv.encode('你', charset);

    var options = {
        hostname: '127.0.0.1',
        port: '3000',
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Encoding': 'identity',
            'Charset': charset // 设置请求字符集编码
        }
    };

    var client = http.request(options, function(res) {
        res.pipe(process.stdout);
    });

    client.end(reqBuff);