import Fastify from "fastify";
import cors from '@fastify/cors'
import jwt from "@fastify/jwt";

import { storyRoutes } from "./routes/story";

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

    await fastify.register(storyRoutes)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()