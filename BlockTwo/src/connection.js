const express = require('express');
const mongoose = require('mongoose');
const Port=5173;
mongoose.connect('mongodb://localhost:27017/Bloggram',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}, err => err ? console.log(err) : 
console.log('Connected to yourDB-name database'));
const signUp = new mongoose.Schema({
    username : String,
    email: String,
    phoneno : String,
    password :String,

});

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
    phoneno : {
        type:Number,
        required : true,
    },
    password : {
        type:password,
        required : true,
        unique : true
    }
});


const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
