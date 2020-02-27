import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { prisma } from '../../src/generated/prisma-client'

export const userOne = {
  input: {
    firstName: 'Woz',
    lastName: 'Retic',
    username: 'woz',
    email: 'woz0@example.com',
    password: bcrypt.hashSync('Password12345'),
  },
  user: undefined,
  jwt: undefined,
};


export const seedDatabase = async () => {
  await prisma.deleteManyUsers();

  // Create user one
  userOne.user = await prisma.createUser({
    data: userOne.input,
  });

  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.AUTH_SECRET);
};
