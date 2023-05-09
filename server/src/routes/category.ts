import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function categoryRoutes(fastify: FastifyInstance) {
    fastify.get('/category', async (req, reply) => {
        const categories = await prisma.category.findMany({
            select: {
                name: true
            },
        });

        return reply.code(200).send(categories)
    })

    fastify.post('/category', async (req, reply) => {
        const createCategoryProps = z.object({
            name: z.string(),
        })

        const { name } = createCategoryProps.parse(req.body)


        const category = await prisma.category.create({
            data: {
                name
            }
        });

        return reply.code(201).send({ category })
    })
}