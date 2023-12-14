// lib/prisma.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };

// Add the following code to disconnect the client after using it
const handleExit = () => {
  prisma.$disconnect();
};

// Listen for process exit and disconnect the client
process.on('exit', handleExit);
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleExit);
process.on('SIGTERM', handleExit);

// Ewekem1884$