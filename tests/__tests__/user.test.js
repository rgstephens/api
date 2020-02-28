import 'cross-fetch/polyfill';

import { prisma } from '../../src/generated/prisma-client'
import { getClient } from '../utils/getClient';
import { createUser, getUsers, info, login, getProfile } from '../utils/operations';
import { seedDatabase, userOne } from '../utils/seedDatabase';

const client = getClient();

test('Should get info back', async () => {
  client.query({
    query: info
  })
})

// beforeEach(seedDatabase);



// test('Should create a new user', async () => {
//   const variables = {
//     data: { firstName: 'Silent', lastName: 'Bob', username: 'silentbob', email: 'snoogins@example.com', password: 'thisIsaPassword!' },
//   };

//   const { data } = await client.mutate({
//     mutation: createUser,
//     variables,
//   })

//   console.log(data)

//   const userExists = await prisma.exists.User({ id: data.createUser.user.id });
//   expect(userExists).toBe(true);
// });


// test('Should not login with bad credentials', async () => {
//   const variables = {
//     email: 'snoogins@example.com',
//     password: 'badpassword12345',
//   };

//   // Throws on bad password
//   await expect(client.mutate({ mutation: login, variables })).rejects.toThrow();
// });

// test('Should not create a new user with a short password', async () => {
//   const variables = {
//     data: {
//       firstName: 'Silent',
//       lastName: 'Bob',
//       username: 'silentbob',
//       email: 'snoogins@example.com',
//       password: '123',
//     },
//   };

//   await expect(
//     client.mutate({
//       mutation: createUser,
//       variables,
//     }),
//   ).rejects.toThrow();
// });

// test('Should fetch user profile', async () => {
//   const authenticatedClient = getClient(userOne.jwt);

//   const { data } = await authenticatedClient.query({ query: getProfile });

//   expect(data.me.id).toBe(userOne.user.id);
//   expect(data.me.username).toBe(userOne.user.username);
//   expect(data.me.email).toBe(userOne.user.email);
// });