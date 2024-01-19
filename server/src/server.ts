import Fastify from "fastify";
import cors from '@fastify/cors'
import jwt from "@fastify/jwt";
import multipart from '@fastify/multipart'

import { storyRoutes } from "./routes/story";
import { categoryRoutes } from "./routes/category";

async function bootstrap() {

    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true // Quando for pra produção é interessante alterar para a url da produção. Ex: www.rocketseat.com.br
    })

    await fastify.register(jwt, {
        secret: "oráculo" // Var de ambiente
    })

    await fastify.register(multipart)
    
    await fastify.register(storyRoutes)
    await fastify.register(categoryRoutes)

    await fastify.listen({ 
        port: process.env.PORT ? Number(process.env.PORT) : 3333,
        host: '0.0.0.0'
    })
}

bootstrap()