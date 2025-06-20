// backend/seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');
const User = require('./models/User');

dotenv.config();

const sampleBooks = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A journey of a shepherd boy seeking treasure.',
    genre: 'Fiction',
    coverImage: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg',
    featured: true,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'A guide to building good habits and breaking bad ones.',
    genre: 'Self-Help',
    coverImage: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
    featured: true,
  },
];

const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Loves reading and reviewing books.',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    bio: 'Avid bookworm and fiction enthusiast.',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    await Book.deleteMany();
    await Book.insertMany(sampleBooks);
    console.log('📚 Books seeded');

    await User.deleteMany();
    await User.insertMany(sampleUsers);
    console.log('👤 Users seeded');

    mongoose.connection.close();
    console.log('✅ Done!');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedDB();
