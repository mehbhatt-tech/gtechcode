import Fastify from 'fastify';
import { crmRoutes } from './src/crm/crmRoutes';

const fastify = Fastify({ logger: true });

// Register CRM routes
fastify.register(crmRoutes, { prefix: '/api' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server listening on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
