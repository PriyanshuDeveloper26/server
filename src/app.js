const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");
const createAdminAccount = require("./scripts/admin");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);

// Connect Server
app.listen(PORT, () => {
  console.log(`Server started on: http://localhost: ${PORT}`);
});