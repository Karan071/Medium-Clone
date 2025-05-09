import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

// middleware we'll check all the authentication here and pre-checks here
app.use('/api/v1/blog/*', async (c, next) => {
  //get the header
  //verify the header
  //if header is correct => proceed
  //if not, we return the 403 status error
  const header = c.req.header("Authorization") || "";
  //Bearer token => ['Bearer', "token"]
  const token = header.split("")[1]; // token
  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" })
  }
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });

  if (existingUser) {
    c.status(400)
    return c.json({
      "msg": "User already exists"
    })
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    c.status(403);
    return c.json({ error: "error while sign up" })
  }
})

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    }
  });
  if (!user) {
    return c.json({ "msg": "User is not created" })
  }
  const jwt = await sign({ id: user?.id }, c.env.DATABASE_URL);
  return c.json({ jwt })
})

app.post("/api/v1/blog", (c) => {
  return c.text("blog");
})

app.put("/api/v1/blog", (c) => {
  return c.text("blog put");
})

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param('id')
  return c.text("blog-get");
})

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("blog-bulk");
})

export default app
