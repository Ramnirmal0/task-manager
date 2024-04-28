const express = require("express");
const app = express();
const port = 3000;

const CustomDB = require("./customDB");
const db = new CustomDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", (req, res) => {
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

app.get("/tasks/:id", (req, res) => {
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

app.post("/tasks", (req, res) => {
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
