<<<<<<< HEAD
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{[key]:value});
} 

function deleteFromObjectByKey(object,key){
  var newObject = Object.assign({},object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
=======
var recipes = {};
>>>>>>> cefeeed6f8fae9b2472e53cc5a6a2a63dac6e4d7
