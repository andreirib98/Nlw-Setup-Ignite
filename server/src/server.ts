// Back-end API RESTFful

    import fastify from "fastify";
    import cors from '@fastify/cors'
    import {PrismaClient} from '@prisma/client'

    const app = fastify()
    const prisma = new PrismaClient() 

    /**
     * Método HTTP: Get, Post, Put, Patch, Delete
     */

    app.register(cors)

    app.get('/hello',async() => {
        const habits = await prisma.habit.findMany()        
        

        return habits
        })

    app.listen({
        port: 3333,
    }).then(() => {
        console.log('HTTP Server running!')
    })