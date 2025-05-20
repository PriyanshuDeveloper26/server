const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/user", signupRoute);

// Connect Server
app.listen(PORT, () => {
  console.log(`Server started on: http://localhost: ${PORT}`);
});
