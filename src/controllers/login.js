const authService = require("../services/login");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token: token });
  } catch (error) {
    alert("invalid email or password");
    res.status(401).json({ message: "Invalid email or password" });
  }
}

module.exports = {
  login,
};
