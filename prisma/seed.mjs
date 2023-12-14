// prisma/seed.mjs

// Import necessary libraries
import { PrismaClient } from '@prisma/client';
import faker from 'faker';

// Create an instance of the Prisma client
const prisma = new PrismaClient();

// Function to generate random data for users
const generateUser = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  emailVerified: faker.date.past(),
  image: faker.image.avatar(),
  role: faker.random.word(),
});

// Function to generate random data for orders
const generateOrder = (userId) => ({
  orderNumber: faker.random.uuid(),
  orderStatus: faker.random.word(),
  userId,
});

// Function to generate random data for products
const generateProduct = (adminId, categoryId) => ({
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  adminId,
  categoryId,
  image: faker.image.image(),
  stock: faker.random.word(),
});

// Function to seed data
const seedData = async () => {
  // Seed users
  const users = await Promise.all(Array.from({ length: 3 }, () => generateUser()));
  const createdUsers = await prisma.user.createMany({ data: users });

  // Seed orders
  const orders = await Promise.all(createdUsers.map((user) => generateOrder(user.id)));
  const createdOrders = await prisma.order.createMany({ data: orders });

  // Seed products
  const products = await Promise.all(
    createdUsers.map((user) => generateProduct(user.id, faker.datatype.number(3) + 1))
  );
  await prisma.product.createMany({ data: products });

  console.log('Data seeded successfully!');
};

// Execute the seeding function and close the Prisma client
seedData()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
