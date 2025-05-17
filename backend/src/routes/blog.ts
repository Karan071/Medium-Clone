import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { blogSchema, updateblogSchema } from "../schemas"

export const  blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }, Variables: {
        userId: string;
    }
}>();

//Middleware
blogRouter.use("/*", async (c, next) => {
    //extracts the user id
    //pass it down to route handler
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            //@ts-ignore
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "User not logged in"
            })
        }
    } catch (error) {
        c.status(403);
        return c.json({
            message: "You are not loged in"
        })
    }
})

blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const { success } = blogSchema.safeParse(body);
    if (!success) {
        c.status(403);
        return c.json({
            message: "Wrong inputs for Blog"
        })
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })
    return c.json({
        id: blog.id
    });
})

blogRouter.put("/", async (c) => {
    const body = await c.req.json();
    const { success } = updateblogSchema.safeParse(body);
    if(!success) {
        c.status(403);
        return c.json({
            message : "Inputs are not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        }, data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    });
})

//ideally provide some pagination : Todo
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs
    })
})

// blog fetch by id
blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }, 
            select: {
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        })
    }
})

