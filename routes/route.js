var express = require('express');
var router = express.Router();
var index =require('./index');

module.exports = function(app){

    app.get('/', index.index);

};
