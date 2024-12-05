const express = require('express');
const app = express();

// Sample user data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  // Check for NaN
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }

  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));