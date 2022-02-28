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
let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// The protoDescriptor object has the full package hierarchy


let currentUsers = [];


( async () => {
    let port = process.env.PORT || 50051;
    let host = process.env.HOST || "0.0.0.0";

    let server = new grpc.Server();

    server.addService(protoDescriptor.demo_user.UserSvc.service, {
        addUser:(call, cb) => {
            currentUsers = [...currentUsers, call.call.stream.id];
     
            cb(null, {"message":"added with success", currentUsers})
        },
        register: (call, cb) => {
            const { name, email, password } = call.request;

            cb(null, {"id": 1});
        },
        subNewRegister: (call) => {
            setTimeout( () => {
                call.write({"count": [1,2,3]});
            }, 5000)

            setTimeout( () => {
                call.write({"count": [2,2,4]});
                call.end();
            }, 8000)
        },
        upload:(call, cb) => {
            let all = fs.createWriteStream(__dirname + "/uploaded/generated.jpg")
            call.on('data', data => {
                console.log("received data");
                let { content } = data // chunk buffer
                console.log(content);
                all.write(content);
                // all.write(data);
            });
            call.on('end', () => {
                console.log("end");
                //all.end();
                cb(null,{
                    "message":"END",
                })
            })
        }
      });
    
    let address = host + ":" + port;

    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server running at " + address);
    });
})();