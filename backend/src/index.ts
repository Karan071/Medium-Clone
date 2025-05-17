import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();
// app.use("/*", cors());
app.use(cors({
  origin: ['https://medium-clone-three-cyan.vercel.app', 'http://localhost:3000'], // Specify allowed origins
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
  maxAge: 600,
}));

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter)

export default app
