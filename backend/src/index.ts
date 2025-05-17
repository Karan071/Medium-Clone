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
  origin: 'https://medium-clone-877955m3x-karan-s-projects-b708c7ea.vercel.app', // Remove trailing slash
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter)

export default app
