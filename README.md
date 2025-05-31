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

### Unit & Component Tests (Jest)
- **Location:** `src/__tests__/`
- **How to run:**
  ```sh
  npm test
  ```
- Uses Jest and React Testing Library for fast, isolated tests of components and logic.

### End-to-End Tests (Playwright)
- **Location:** `playwright/`
- **How to run:**
  ```sh
  npx playwright test
  ```
- Simulates real user interactions in a browser for full app flows.
- Make sure your app is running locally before running Playwright tests.

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