const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Bloggram', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => console.log('connected'));
db.on('open', () => console.log('open'));
db.on('disconnected', () => console.log('disconnected'));
db.on('reconnected', () => console.log('reconnected'));
db.on('disconnecting', () => console.log('disconnecting'));
db.on('close', () => console.log('close'));
db.on('error', (err) => { console.error('MongoDB connection error:', err); });

// Create a mongoose model for the 'names' collection
const NameModel = mongoose.model('SignUp', {
  username: String,
  mail: String,
  phone: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

const BlogModel = mongoose.model('Blog', {
  author: String,
  image: String,
  title: String,
  subtitle: String,
  content: String,
  hashtag: [String],
  createdAt: { type: Date, default: Date.now }
});
app.post('/api/getBlogs', async (req, res) => {
  try {
    const allBlogs = await BlogModel.find({});
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error('Error retrieving blogs from MongoDB:', error);
    res.status(500).send('Internal Server Error\n');
  }
});

// Route to handle name submission
app.post('/api/submitName', (req, res) => {
  console.log('Received request:', req.body);
  const { username, mail, phone, password } = req.body;
  // Create a new document in the 'names' collection
  const newName = new NameModel({ username, mail, phone, password });
  // Save the document to the database using promises
  newName.save()
    .then(() => {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    })
    .catch((err) => {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Internal Server Error\n');
    });
});


// Route to check if a user with given email and password exists
app.post('/api/signIn', async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await NameModel.findOne({ mail, password });
    if (user) {
      console.log('User exists');
      res.status(200).send({ message: 'User exists', user });
    } else {
      console.log('User Doesnot exist...');
      res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error checking user:', error);
    res.status(500).send('Internal Server Error\n');
  }
});

app.post('/api/blogPost', (req, res) => {
  console.log('Received request:', req.body);
  const { author, image, title, subtitle, content, hashtag } = req.body;
  // Create a new document in the 'names' collection
  const newName1 = new BlogModel({ author, image, title, subtitle, content, hashtag });
  // Save the document to the database using promises
  newName1.save()
    .then(() => {
      console.log('Blogs saved successfully');
      res.status(200).send('Blog data saved successfully');
    })
    .catch((err) => {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Internal Server Error\n');
    });
});

app.get('/api/getAllBlogs', async (req, res) => {
  try {
    const allBlogs = await BlogModel.find({});
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Internal Server Error\n');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`\nServer is running on http://localhost:${PORT} \n`);
});