# Investment Calculator

A React-based investment calculator built with TypeScript and Tailwind CSS. Easily calculate and visualize investment growth over time.

## Features
- Enter initial amount, annual contribution, expected return, and duration
- See yearly breakdown of total amount, contributions, and interest earned
- Responsive, modern UI with Tailwind CSS
- Fully tested with Jest and React Testing Library

## Tech Stack
- React
- TypeScript
- Tailwind CSS
- Jest & React Testing Library
- Playwright (end-to-end testing)
- Create React App (CRA)

## Recommended Editor Extension

For the best development experience with Tailwind CSS, install the **Tailwind CSS IntelliSense** extension:

- [Tailwind CSS IntelliSense for VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

This extension provides:
- Autocomplete for Tailwind classes
- Linting and highlighting for Tailwind directives (removes "Unknown at rule @tailwind" warnings)
- Hover previews and more

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm

### Installation
```sh
npm install
```

### Running the App
```sh
npm start
```
The app will be available at [http://localhost:3001](http://localhost:3001)

## Testing

You can run tests **manually** or automatically after starting the app:

### Manual Test Workflow
- **Unit & Component Tests (Jest):**
  ```sh
  npm test
  ```
- **End-to-End Tests (Playwright):**
  ```sh
  npx playwright test
  ```
  (Make sure your app is running locally before running Playwright tests.)

### Automatic Test Workflow
- Start the app and run all tests automatically:
  ```sh
  npm run start:with-tests
  ```
  This will:
  - Start the dev server on port 3001
  - Wait for the server to be ready
  - Run all Jest and Playwright tests

### Test Locations
- **Jest tests:** `src/__tests__/`
- **Playwright tests:** `playwright/`

## Project Structure
```
src/
  components/         # React components (form, results table, etc.)
  services/           # Investment calculation logic
  models/             # TypeScript types
  __tests__/          # Jest unit/component tests
  App.tsx             # Main app component
  index.tsx           # Entry point
  index.css           # Tailwind CSS imports
playwright/           # Playwright end-to-end tests
```

## Customization
- Update Tailwind styles in `src/index.css` or component files
- Adjust calculation logic in `src/services/InvestmentCalculator.ts`

## License
ISC 