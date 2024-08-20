import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  return reply.type('application/json').code(200).send({
    id: request.id,
    params: request.params,
    query: request.query,
    headers: request.headers,
    log: request.log,
    body: request.body,
    routeConfig: request.routeConfig,
    routeSchema: request.routeSchema,
    ip: request.ip,
    ips: request.ips,
    hostname: request.hostname,
    url: request.url,
    originalUrl: request.originalUrl,
    protocol: request.protocol,
    method: request.method,
    routerPath: request.routerPath,
    routerMethod: request.routerMethod,
    routeOptions: request.routeOptions,
    is404: request.is404,
  });
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
