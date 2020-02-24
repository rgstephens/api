# Serpent Tracker API
Prisma GraphQL API for Serpent Tracker.  Work in progress still...

# Local Setup
From the root of the repo run `docker-compose up -d` after creating a `.env` file based off the `.env.example` in the repo.

After this is up and running you go to the prisma folder and run

`export PRISMA_MANAGEMENT_API_SECRET=secretfromenv`

Then run the `prisma deploy` command to setup the prisma service.

Now the Prisma Admin should be available at http://localhost:4466/_admin

Then you can start up the graphql yoga part with `node src/index.js` atm which will load that up at `http://localhost:4000`
