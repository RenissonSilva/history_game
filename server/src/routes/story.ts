import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function storyRoutes(fastify: FastifyInstance) {
    fastify.get('/story', async () => {
        const stories = await prisma.story.findMany();

        return { stories }
    })
}