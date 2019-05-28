const TCP= require('net');
const tcp = TCP.createServer((socket)=>{
  
    const buffer:Buffer = Buffer.from("hello",'utf-8')
    socket.write(buffer)
    console.log('CONNECTED: ' +
    socket.remoteAddress + ':' + socket.remotePort);
    socket.write(buffer);
    socket.on('data', function(data) {
        // console.log('DATA ' + socket.remoteAddress + ': ' + data);
        // // 回发该数据，客户端将收到来自服务端的数据
        // socket.write('You said "' + data + '"');
    });
})
 
tcp.listen(3999,'127.0.0.1',()=>{
    console.log('1234')
})