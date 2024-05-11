import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2)
    .max(20)


export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().min(6,{message:'invalid email adresss'}),
    password : z.string().min(6)
})
