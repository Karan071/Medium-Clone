import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from 'hono/jwt';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


userRouter.post("/signup", async (c) => {
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
        // ZOD AND PASSWORD HASH : TODO
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
                username: body.username
            }
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        if (!c.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment");
        }          
        console.log("JWT token created:", token);
        return c.json({ 
            message : "User is successfully created",
            token
        });
    } catch (error) {
        console.log(error);
        c.status(402);
        return c.json({ error: "Error while signing up" })
    }
})

userRouter.post("/signin", async (c) => {
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
        return c.json({ "msg": "Invalid user details" })
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt })
})