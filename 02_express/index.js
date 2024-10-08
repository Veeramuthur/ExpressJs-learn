import 'dotenv/config';
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );

let teaData = [];
let nextId = 1;

// add teas to database
app.post("/teas", (req, res) => {
    logger.info("Tea added successfully");
  const { name, price } = req.body;
  const newTea = {id: nextId++,name:name,price:price};
  teaData.push(newTea);
  res.status(201).send(newTea);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

// get tea by id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("Tea not found");
  } else {
    res.status(200).send(tea);
  }
});

// update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("Tea not found");
  } else {
    tea.name = req.body.name;
    tea.price = req.body.price;
    res.status(200).send(tea);
  }
});

// delete tea
app.delete("/teas/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    res.status(404).send("Tea not found");
  } else {
    teaData = teaData.filter((tea) => tea.id !== parseInt(req.params.id));
    res.status(200).send(tea);
  }
});

// app.get("/", (req, res) => {
//   res.send("Hello World from VEERA!");
// });

// app.get("/thanks", (req, res) => {
//   res.send("Thanks for ordering from us - VEERA!");
// });

// app.get("/gmail", (req, res) => {
//     res.send("Veeramuthu.ra17@gmail.com");
//   });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
