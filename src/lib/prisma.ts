import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "prisma/generated/prisma/client"

const adapter = new PrismaPg({
  connectionString: process.env.SUPABASE_DATABASE_URL,
})

declare global {
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient({ adapter })
if (process.env.NODE_ENV !== "production") globalThis.prisma = db

export { db }
