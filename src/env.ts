import { z } from 'zod'

//validação para verificar se possui as variavéis de ambientes necessárias
const envSchema = z.object({
    PORT: z.coerce.number().default(5382),
    DATABASE_URL: z.string().url().startsWith('postgresql://')
})

export const env = envSchema.parse(process.env)

