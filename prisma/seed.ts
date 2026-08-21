import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an Organization
  const org = await prisma.organization.create({
    data: { name: "Acme Corp" }
  });

  // Seed Contacts
  await prisma.contact.createMany({
    data: [
      { firstName: "John", lastName: "Doe", phone: "+15551234567", status: "NEW", organizationId: org.id },
      { firstName: "Jane", lastName: "Smith", phone: "+15559876543", status: "CONTACTED", organizationId: org.id },
    ]
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
