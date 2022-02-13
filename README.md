https://hackernoon.com/building-user-service-with-grpc-nodejs-and-mongodb-the-complete-microservice-tutorial-part-2-jkw34pt


grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/generatedProto/ --grpc_out=grpc_js:src/generatedProto --proto_path=./protos/user ./protos/user/*.proto