import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function crmRoutes(fastify: FastifyInstance) {
  // GET /api/contacts - List all contacts
  fastify.get('/contacts', async (request, reply) => {
    try {
      const contacts = await prisma.contact.findMany();
      return { contacts };
    } catch (error) {
      reply.status(500).send({ error: 'Failed to fetch contacts' });
    }
  });

  // POST /api/contacts - Create a new lead
  fastify.post('/contacts', async (request, reply) => {
    const { firstName, lastName, phone, organizationId } = request.body as any;
    try {
      const newContact = await prisma.contact.create({
        data: { firstName, lastName, phone, organizationId }
      });
      return { status: 'created', contact: newContact };
    } catch (error) {
      reply.status(500).send({ error: 'Failed to create contact' });
    }
  });
}
