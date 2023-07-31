const md_newSet = (req, res, next) => {
    console.log('route set');
    console.log(req.body.foo);
    
    // const set = setGroup.find({rel: req.body.foo}).populate('rel').exec().then(result => {
    setGroup.findOne({rel: req.body.foo})
      .exec()
      .then(result => {
        console.log(result+'result')
        result.pseudoArray.push(req.body.pseudo)
        result.confirmed = true;
        result.save()
      })
      .catch(err => {
        console.log(err);
      });
    next();
}

module.exports = md_newSet;
