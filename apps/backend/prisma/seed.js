import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();
  await prisma.author.deleteMany();

  const author1 = await prisma.author.create({
    data: {
      name: 'Gabriel Torres',
      email: 'gabriel@example.com',
      age: 42,
      country: 'Guatemala',
      biography: 'Autor especializado en arquitectura de software.'
    }
  });

  const author2 = await prisma.author.create({
    data: {
      name: 'Lucía Méndez',
      email: 'lucia@example.com',
      age: 35,
      country: 'México',
      biography: 'Escritora de temas sobre bases de datos y APIs.'
    }
  });

  await prisma.book.createMany({
    data: [
      {
        title: 'GraphQL desde cero',
        isbn: 'ISBN-001',
        publishedYear: 2023,
        genre: 'Tecnología',
        price: 29.99,
        pages: 320,
        inStock: true,
        authorId: author1.id
      },
      {
        title: 'Diseño de APIs modernas',
        isbn: 'ISBN-002',
        publishedYear: 2024,
        genre: 'Tecnología',
        price: 34.5,
        pages: 410,
        inStock: true,
        authorId: author1.id
      },
      {
        title: 'Modelado de datos relacional',
        isbn: 'ISBN-003',
        publishedYear: 2022,
        genre: 'Base de Datos',
        price: 25.0,
        pages: 280,
        inStock: false,
        authorId: author2.id
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Seed completado');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });