import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from 'hono/jwt';
import { signUpSchema, signInSchema } from "../schemas"


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
    const { success } = signUpSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
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
            message: "User is successfully created",
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
    const { success } = signInSchema.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    });
    if (!user) {
        c.status(400);
        return c.json({ "msg": "Invalid user details" })
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt })
})