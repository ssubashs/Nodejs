/**
 * New node file
 */
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/profile/:id', function(req, res) {
      var id = req.params.id;      
      res.render('profile',{userid:id});
  });



};