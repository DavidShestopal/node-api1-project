const express = require('express');

const server = express();

// const shortid = require('shortid');

// console.log(shortid.generate());

let users = [
  {
    id: 1, //shortid.generate(), // hint: use the npm to generate it
    name: 'Jane Doe', // String, required
    bio: "Not Tarzan's Wife, another Jane", // String, required
  },

  {
    id: 2,
    name: 'David Shestopal',
    bio: 'Lambda Student',
  },
];

//middleware
server.use(express.json());

//endpoints

//get
server.get('/', (req, res) => {
  res.json({ api: 'running....' });
});

server.get('/api/users', (req, res) => {
  res.json(users);
});

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'user not found' });
  }
});

//post
server.post('/api/users', (req, res) => {
  const userInfo = req.body;

  users.push(userInfo);

  res.status(201).json(users);
});

const port = 5000;
server.listen(port, () => console.log(`\n === api on port ${port} ==\n`));
