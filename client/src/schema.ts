import {z} from "zod";

export const signUpSchema = z.object({
    name: z.string().optional(),
    username: z.string(),
    email : z.string(),
    password : z.string().min(1, "Password must be more than 1 Character"),
});

export const signInSchema = z.object({
    email : z.string(),
    password : z.string().min(1, "Password must be more than 1 Character"),
});

export const blogSchema = z.object({
    title: z.string(),
    content: z.string()
});

export const updateblogSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});



export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
export type blogType = z.infer<typeof blogSchema>;
export type updateblogSchemaType = z.infer<typeof updateblogSchema>
