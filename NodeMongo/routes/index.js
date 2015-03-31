
/*
 * GET home page.
 */

exports.express = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.index = function(req, res){
  res.render('index');
};

exports.login = function(req, res){
  res.render('login');
};