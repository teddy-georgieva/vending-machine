# VendingMachine

This project is a simulation of a vending machine implemented with Angular and a mocked API, using JSON Server.
The application loads an initial list of products from a fake API but performs all CRUD operations only in the client state, according to the requirements.

## Features
✔ Vending Machine Logic
* Accepts only specific coin denominations
* Product prices are in BGN (левове)
* Supports coin insertion
* Validates accepted coin values
* Supports buying a product
* Machine returns change
* Reset function returns inserted coins without purchase
* Each product has a maximum inventory of 15 items

✔ Products Management (CRUD)
* Load initial products list from mocked API
* The external API is not modified

✔ Web UI
* Responsive design
* User-friendly interface

## Development server

To start a local development server, run:

install dependencies
```bash
npm install
```

Start the mocked API (JSON Server)
```bash
npm run api
```

This will start the API at:
```bash
http://localhost:3001/products
```
Start the Angular application
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
