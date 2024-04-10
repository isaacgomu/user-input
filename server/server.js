import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message recieved!" });
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
