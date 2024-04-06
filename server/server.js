const express = require('express');
const app = express();

app.use(express.json());

// user information
const users = [
  {
    username: "joel",
    password: "zimba"
  },
  {
    username: "evans@2.com",
    password: "1234"
  }
];
// user validation
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.username === email && user.password === password);

  if (user) {

    let data = res.json({ status: "success", data: user });
    return data;
  } else {
    let data = res.status(401).json({ status: "failed", message: "Invalid email or password" });
    return data;
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
