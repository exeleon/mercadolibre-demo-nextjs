

# Mercadolibre Demo Next.js

This project is built with [Next.js](https://nextjs.org) and [Express](https://expressjs.com) and organized in a [Nx](https://nx.dev) monorepo.

The Express app consumes the Mercadolibre API and serves a simplified version of the data to the front-end Next.js app.

## Folder structure

- apps
  - **api:** express app
  - **site:** next.js app
- libs
  - **api-interfaces:** shared lib between `api` and `site` apps

## Development server

Run `npx nx serve api` to start the Express dev server.

Run `npm start` to start the Next.js dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Features

- Typescript
- SCSS preprocessor
- Monorepo structure
- Server-side and static rendering
- Module-oriented folder organization
- Use of `libs` for sharing code within the monorepo
- Unit Testing configuration with [Jest](https://jestjs.io)
  - Run `npm run test`
- End-to-end Testing configuration with [Cypress](https://www.cypress.io)
  - Run `npm run e2e site-e2e`

## Todo

- Proper environment variables configuration
- CI/CD configuration
- Add unit tests
- Add e2e tests

## Licence

Public domain

## Author

Manuel Lopera
[Twitter](https://twitter.com/LoperaManuel) - [Linkedin](https://www.linkedin.com/in/manuellopera)
