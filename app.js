const express = require("express");
const app = express();
const port = 3000;

const CustomDB = require("./customDB");
const db = new CustomDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", (req, res) => {
  let result;
  let status;
  try {
    status = 200;
    result = {
      result: db.find(),
    };
  } catch (error) {
    status = 405;
    result = {
      message: error,
    };
  }
  res.status(status).send(result);
});

app.get("/tasks/:id", (req, res) => {
  const uuid = req.params.id;
  let result;
  let status;
  try {
    status = 200;
    result = {
      result: db.findOne(uuid),
    };
  } catch (error) {
    status = 405;
    result = {
      message: error,
    };
  }
  res.status(status).send(result);
});

app.post("/tasks", (req, res) => {
  let result;
  let status;
  try {
    db.validateInput(req.body);
    db.insertOne(req.body);
    status = 200;
    result = {
      result: "Task Inserted successfully",
    };
  } catch (error) {
    status = 405;
    result = {
      message: error.message,
    };
  }
  res.status(status).send(result);
});

app.put("/tasks/:id", (req, res) => {
  let result;
  try {
  } catch (error) {
    result = {
      statusCode: 405,
      body: {
        message: error,
      },
    };
  }
  res.send(result);
});

app.delete("/tasks/:id", (req, res) => {
  let result;
  try {
  } catch (error) {
    result = {
      statusCode: 405,
      body: {
        message: error,
      },
    };
  }
  res.send(result);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
