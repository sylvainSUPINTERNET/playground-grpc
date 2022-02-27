// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_demo_user_AddUserResponse(arg) {
  if (!(arg instanceof user_pb.AddUserResponse)) {
    throw new Error('Expected argument of type demo_user.AddUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_AddUserResponse(buffer_arg) {
  return user_pb.AddUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_File(arg) {
  if (!(arg instanceof user_pb.File)) {
    throw new Error('Expected argument of type demo_user.File');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_File(buffer_arg) {
  return user_pb.File.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_RegisterRequest(arg) {
  if (!(arg instanceof user_pb.RegisterRequest)) {
    throw new Error('Expected argument of type demo_user.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_RegisterRequest(buffer_arg) {
  return user_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_RegisterSub(arg) {
  if (!(arg instanceof user_pb.RegisterSub)) {
    throw new Error('Expected argument of type demo_user.RegisterSub');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_RegisterSub(buffer_arg) {
  return user_pb.RegisterSub.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_RegisterSubResponse(arg) {
  if (!(arg instanceof user_pb.RegisterSubResponse)) {
    throw new Error('Expected argument of type demo_user.RegisterSubResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_RegisterSubResponse(buffer_arg) {
  return user_pb.RegisterSubResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_ResponseUpload(arg) {
  if (!(arg instanceof user_pb.ResponseUpload)) {
    throw new Error('Expected argument of type demo_user.ResponseUpload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_ResponseUpload(buffer_arg) {
  return user_pb.ResponseUpload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type demo_user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserSvcService = exports.UserSvcService = {
  addUser: {
    path: '/demo_user.UserSvc/addUser',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: user_pb.AddUserResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_demo_user_AddUserResponse,
    responseDeserialize: deserialize_demo_user_AddUserResponse,
  },
  register: {
    path: '/demo_user.UserSvc/register',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_demo_user_RegisterRequest,
    requestDeserialize: deserialize_demo_user_RegisterRequest,
    responseSerialize: serialize_demo_user_UserResponse,
    responseDeserialize: deserialize_demo_user_UserResponse,
  },
  subNewRegister: {
    path: '/demo_user.UserSvc/subNewRegister',
    requestStream: false,
    responseStream: true,
    requestType: user_pb.RegisterSub,
    responseType: user_pb.RegisterSubResponse,
    requestSerialize: serialize_demo_user_RegisterSub,
    requestDeserialize: deserialize_demo_user_RegisterSub,
    responseSerialize: serialize_demo_user_RegisterSubResponse,
    responseDeserialize: deserialize_demo_user_RegisterSubResponse,
  },
  upload: {
    path: '/demo_user.UserSvc/upload',
    requestStream: true,
    responseStream: false,
    requestType: user_pb.File,
    responseType: user_pb.ResponseUpload,
    requestSerialize: serialize_demo_user_File,
    requestDeserialize: deserialize_demo_user_File,
    responseSerialize: serialize_demo_user_ResponseUpload,
    responseDeserialize: deserialize_demo_user_ResponseUpload,
  },
};

exports.UserSvcClient = grpc.makeGenericClientConstructor(UserSvcService);
