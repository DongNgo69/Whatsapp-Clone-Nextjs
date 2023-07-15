import { PrismaClient } from '@prisma/client'

let prismaInstance 

export default function getPrismaInstance(){
    if(!prismaInstance) {
        prismaInstance = new PrismaClient()
    }
    return prismaInstance
}

