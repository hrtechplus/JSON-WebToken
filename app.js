const express = require("express");
const app = express();
const student = require("./routers/student");
const user = require("./routers/user");
const port = process.env.PORT || 3000;
const auth = require("./middleware/auth");

app.use(express.json());
app.use("/api/student", student);
app.use("/api/user", auth, user);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
