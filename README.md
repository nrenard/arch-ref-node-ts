# MS Architecture

- Node
- Express
- Tests with jest, axios-mock-adapter.

**This is your source code tree:**

```
__mocks__
__tests__
src
  |-- app
    |-- controllers
    |-- helpers
    |-- middlewares
    |-- services
    |-- models
  |-- config
  |-- routes
  |-- server.js
  |-- index.js
...
```

# Installation

 - Minimum requirements to run the project `node` >= 8.
 - In the root folder run `npm install`.
 - Copy and paste the `.env.example` to `.env`.
 - Run database and update `MONGO_URL` in `.env`.

<br>

# Scripts

### Server from develop

> `npm run dev`

### Server from production

> `npm start`

### Running tests

> `npm test`

### Running tests coverage

> `npm run coverage`

### Running audit in packages

> `npm run run-audit`

