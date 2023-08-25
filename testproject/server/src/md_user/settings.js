const { User } = require('../schema.js');
const { Settings } = require('../schema');

const md_newSetting = async (req, res, next) => {
	console.log('routeSettings');
	const setUser = new Settings({
		pseudo: req.body.pseudo,
		stg: req.body.foo,
	})
	setUser.save()
		.then(uId => {
			console.log(uId._id);
			User.findById({_id: uId.stg}).exec().then((res) => {
				console.log(res);
				res.ofCourse.push(uId._id);
				res.save();
			});
	  	})
		.catch(fId => {
			console.log('catch'+fId);
		});
	console.log(setUser);
	next()
}

module.exports = md_newSetting;

// const setUser= new User({
	// pseudo: req.body.pseudo,
	// ofCourse: req.body.foo,
	// })
	// setUser.save()
	// const user =  await User.findOne({email: 'test@test.com'}).populate('stg').then(result => {
	  // console.log(result);
	// })
	// const user = await User.find().populate('stg').exec()