// @ts-nocheck
import { FastifyInstance } from "fastify";
import fs from 'fs'
import util from 'util'
import { pipeline } from 'stream'

import { prisma } from "../lib/prisma";

export async function storyRoutes(fastify: FastifyInstance) {
    fastify.get('/story', async (req, reply) => {
        // const listStoriesProps = z.object({
        //     page: z.string(),
        // })

        // let { page } = listStoriesProps.parse(req.query)
        // const numberOfPages = Number(page)

        const stories = await prisma.story.findMany({
            // take: 10,
            // skip: (numberOfPages - 1) * 10
        });

        return reply.code(200).send({stories})
    })

    fastify.post('/story', async (req, reply) => {
        const pump = util.promisify(pipeline)
        let data = {};

        const parts = req.parts()

        for await (const part of parts) {
            if (part.file) {
            await pump(part.file, fs.createWriteStream(`../../../mobile/public/cardCovers/${part.filename}`))
                data = {
                    ...data,
                    [part.fieldname]: part.filename
                }
            } else {
                data = {
                    ...data,
                    [part.fieldname]: part.value
                }
            }
        }


        const story = await prisma.story.create({ data });

        return reply.code(201).send({ story })
    })
}