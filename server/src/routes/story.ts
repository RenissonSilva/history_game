import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function storyRoutes(fastify: FastifyInstance) {
    fastify.get('/story', async (req, reply) => {
        const stories = await prisma.story.findMany();

        return reply.code(200).send(stories)
    })

    fastify.post('/story', async (req, reply) => {
        const createStoryProps = z.object({
            title: z.string(),
            description: z.string(),
			// coverImage: z.string(), //trocar tipo pra imagens, n sei qual é
			// resolutionImage: z.string(), //trocar tipo pra imagens, n sei qual é
			categoryId: z.nullable(z.string()),
        })

        const { title ,description, categoryId } = createStoryProps.parse(req.body)


        const story = await prisma.story.create({
            data: {
                title,
                description,
                categoryId
            }
        });

        return reply.code(201).send({ story })
    })
}