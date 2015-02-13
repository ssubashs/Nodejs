/**
 * New node file
 */
 var mongodb = require("mongodb");
 var monk = require('monk');
 var db = monk('localhost:27017/test');
 
 
module.exports.db = db; 