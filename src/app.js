import express from 'express';
import botRouter from "./routes/bot.routes.js";


export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/", botRouter);
