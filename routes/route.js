var express = require('express');
var index =require('./index');

module.exports = function(app){

    app.get('/', index.index);
    app.get('/makeGroup',index.makeGroup);
    app.get('/modal',index.modal);
    app.get('/group',index.group);
};
