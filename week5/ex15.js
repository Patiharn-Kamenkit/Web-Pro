var fs=require('fs')
var data='Hello World Modi quia maiores. Nihil sapiente etatque. Sint numquam molestiae iure nemo fugiat asperioresaspernatur ducimus. Sit rerum officiis reprehenderit hic nisiodit officia accusantium eos.'
var writerStream=fs.createWriteStream('output.txt')
writerStream.write(data,'utf8')
writerStream.end()
writerStream.on('finish',function(){
console.log("Output finish")
})