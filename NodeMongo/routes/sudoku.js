exports.getpuzzle = function(req, res){
  var db = req.db;
    console.log(db);
    var collection = db.get('sudoku');
    collection.find({},{},function(e,docs){
        res.render('sudoku',{puzzles:docs});
    });
};

