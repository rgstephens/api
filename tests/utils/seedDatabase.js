import "cross-fetch/polyfill";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../../src/generated/prisma-client";

export const userOne = {
  input: {
    firstName: "Woz",
    lastName: "Retic",
    email: "woz0@example.com",
    username: "woz",
    password: bcrypt.hashSync("Password12345")
  },
  user: undefined,
  jwt: undefined
};

export const seedDatabase = async () => {
  await prisma.deleteManyUsers();

  // Create user one
  userOne.user = await prisma.createUser({
    ...userOne.input
  });

  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.AUTH_SECRET);
};
