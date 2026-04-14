import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 4000;

const typeDefs = `#graphql
  type Author {
    id: Int!
    name: String!
    email: String!
    age: Int!
    country: String!
    biography: String
    createdAt: String!
    updatedAt: String!
    books: [Book!]!
  }

  type Book {
    id: Int!
    title: String!
    isbn: String!
    publishedYear: Int!
    genre: String!
    price: Float!
    pages: Int!
    inStock: Boolean!
    createdAt: String!
    updatedAt: String!
    authorId: Int!
    author: Author!
  }

  type Query {
    authors: [Author!]!
    author(id: Int!): Author
    books: [Book!]!
    book(id: Int!): Book
  }
`;

const resolvers = {
  Query: {
    authors: async () => {
      return prisma.author.findMany();
    },
    author: async (_, { id }) => {
      return prisma.author.findUnique({
        where: { id }
      });
    },
    books: async () => {
      return prisma.book.findMany();
    },
    book: async (_, { id }) => {
      return prisma.book.findUnique({
        where: { id }
      });
    }
  },
  Author: {
    books: async (parent) => {
      return prisma.book.findMany({
        where: { authorId: parent.id }
      });
    },
    createdAt: (parent) => parent.createdAt.toISOString(),
    updatedAt: (parent) => parent.updatedAt.toISOString()
  },
  Book: {
    author: async (parent) => {
      return prisma.author.findUnique({
        where: { id: parent.authorId }
      });
    },
    createdAt: (parent) => parent.createdAt.toISOString(),
    updatedAt: (parent) => parent.updatedAt.toISOString()
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await server.start();

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
  res.json({
    success: true,
    message: 'GraphQL API running'
  });
});

app.use('/graphql', expressMiddleware(server));

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
  console.log(`GraphQL endpoint on http://localhost:${port}/graphql`);
});