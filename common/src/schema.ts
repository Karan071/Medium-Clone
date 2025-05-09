import {z} from "zod";

export const signUpSchema = z.object({
    email : z.string(),
    password : z.string().min(1, "Password must be more than 1 Character"),
    name: z.string().optional()
});
export type SignUpType = z.infer<typeof signUpSchema>;

export const signInInput = z.object({
    email : z.string(),
    password : z.string().min(1, "Password must be more than 1 Character"),
});
export type SignInType = z.infer<typeof signInInput>;

export const createPostInput = z.object({
    title: z.string(),
    content : z.string()
});
export type CreatePostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    title: z.string().optional(),
    content : z.string().optional()
})
export type UpdatePostType = z.infer<typeof updatePostInput>;

