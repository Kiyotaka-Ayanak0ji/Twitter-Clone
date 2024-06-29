import { PrismaClient } from '@prisma/client';

//Declare a global client for a global client instance
//This is not affected by next.js hot reload..

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client 

export default client;