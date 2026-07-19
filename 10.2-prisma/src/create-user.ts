import "dotenv/config";

console.log("DATABASE_URL:", process.env.DATABASE_URL);
import { PrismaClient } from "../prisma/generated/client.js";
// Import the driver adapter for your specific database (example uses PostgreSQL)
import { PrismaPg } from "@prisma/adapter-pg";

// Initialize the adapter according to your driver's requirements
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Pass the adapter instance to PrismaClient
const prisma = new PrismaClient({ adapter });

// Find all users with their posts
const users = await prisma.user.findMany({
  include: { posts: true },
});

// Create a user with a post

const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    posts: {
      create: { title: "Hello World" },
    },
  },
});