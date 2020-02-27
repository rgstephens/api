# Serpent Tracker API
Prisma GraphQL API for Serpent Tracker.  Work in progress still...

# Local Setup Prisma
From the root of the repo run `docker-compose up -d` after creating a `.env` file based off the `.env.example` in the repo.

After this is up and running you go to the database folder and run

`export PRISMA_MANAGEMENT_API_SECRET=secretfromenv`

Then run the `prisma deploy` command to setup the prisma service.

Now the Prisma Admin should be available at http://localhost:4466/_admin


# Graphql Yoga
Then simply run `yarn install` to install dependencies and `yarn dev` to run in local mode.
