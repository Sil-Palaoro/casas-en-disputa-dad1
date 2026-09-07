import express from 'express';
import dotenv from "dotenv";
import botRouter from "./routes/bot.routes.js";


dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/", botRouter);

app.listen(port, () => {
  console.log(`Ejemplo de la app escuchando en el puerto ${port}`);
});