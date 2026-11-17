import express from 'express';
import botRouter from "./routes/bot.routes.js";


export const app = express();

app.use(express.json());

// Prueba de servidor escuchando
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Perfil público del bot. No requiere body ni autenticación.
app.get("/profile", (req, res) => {
  return res.status(200).json({
    name: "Bot de las chicas superpoderosas y Lucas",
    colors: ["#8d0899", "#cc4bd8", "#eed46c"],
  });
});

app.use("/", botRouter);
