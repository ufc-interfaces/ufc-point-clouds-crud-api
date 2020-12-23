import dotenv from 'dotenv'

dotenv.config()

export const PORT = Number(process.env.PORT || 8880)
export const ENVIRONMENT = process.env.ENVIRONMENT || 'development'
