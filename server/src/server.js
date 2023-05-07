"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
// import { poolRoutes } from "./routes/poll";
// import { userRoutes } from "./routes/user";
// import { guessRoutes } from "./routes/guess";
// import { authRoutes } from "./routes/auth";
// import { gameRoutes } from "./routes/game";
async function bootstrap() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.register(cors_1.default, {
        origin: true //Quando for pra produção é interessante alterar para a url da produção. Ex: www.rocketseat.com.br
    });
    await fastify.register(jwt_1.default, {
        secret: 'oraculo' //Var de ambiente
    });
    // await fastify.register(poolRoutes)
    // await fastify.register(userRoutes)
    // await fastify.register(guessRoutes)
    // await fastify.register(authRoutes)
    // await fastify.register(gameRoutes)
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
}
bootstrap();
