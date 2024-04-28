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
    result = db.find();
  } catch (error) {
    status = 405;
    result = {
      message: error,
    };
  }
  res.status(status).send(result);
});

app.get("/tasks/:id", (req, res) => {
  let result;
  let status;
  try {
    const uuid = req.params.id;
    status = 200;
    result = db.findOne(uuid);
  } catch (error) {
    status = 404;
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
    status = 201;
    result = {
      result: "Task Inserted successfully",
    };
  } catch (error) {
    status = 400;
    result = {
      message: error.message,
    };
  }
  res.status(status).send(result);
});

app.put("/tasks/:id", (req, res) => {
  let result;
  let status;
  try {
    const uuid = req.params.id;
    db.validateInput(req.body);
    db.updateOne(uuid, req.body);
    status = 200;
    result = {
      result: "Task Updated Successfully",
    };
  } catch (error) {
    status = 404;
    result = {
      message: error.message,
    };
  }
  res.status(status).send(result);
});

app.delete("/tasks/:id", (req, res) => {
  let result;
  let status;
  try {
    const uuid = req.params.id;
    db.deleteOne(uuid);
    status = 200;
    result = {
      result: "deleted successfully",
    };
  } catch (error) {
    status = 404;
    result = {
      message: error.message,
    };
  }
  res.status(status).send(result);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
