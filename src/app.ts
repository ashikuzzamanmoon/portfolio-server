import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import { notFountRoute } from "./app/middlewares/notFountRoute";

const app: Application = express();

// parser
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

const allowedOrigins = [
  "https://portfolio-dashboard-lime.vercel.app",
  "https://my-portfolio-three-kohl-82.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello user");
});

app.use(globalErrorhandler);
app.use(notFountRoute);

export default app;
