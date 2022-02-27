const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
let PROTO_PATH = __dirname + '/../protos/user/user.proto';
const fs = require('fs');

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

let userSvc = grpc.loadPackageDefinition(packageDefinition).demo_user.UserSvc;
let client = new userSvc('localhost:50051',grpc.credentials.createInsecure());

const readStream = fs.createReadStream(__dirname +'/mock/pic.jpg');
readStream.on('data', (chunk) => {
    // console.log(Uint8Array.from(chunk));
    console.log(chunk);
    let stream = client.upload({
        content: chunk
    }, (err, resp) => {
        if ( err ) {
            console.log(err);
        }
    });
    // serviceCall.write({
    //     chunk: Uint8Array.from(chunk)
    // });
});

// client.register({
//     name:"",
//     email: "",
//     password: ""
// }, (err, resp) => {
//     console.log(resp)
//     console.log(err)
// });


// let call = client.subNewRegister({}, (err, resp) => {})

// call.on('data', data =>{
//     console.log(data);
// })

// call.on('end', () => {
//     console.log("end")
// })

// console.log(client);
// // let call = client.addUser({});

// // call.on('data', data => {
// //     console.log(data);
// // })