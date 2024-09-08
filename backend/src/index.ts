import bodyParser from "body-parser";
import express from "express";
import router from "./routes/admin";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/admin",router)

app.listen(port, () => {
  console.log(`Server started at port [${port}]`);
});


