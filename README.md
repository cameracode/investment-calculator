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
- Create React App (CRA)

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

### Running Tests
```sh
npm test
```

## Project Structure
```
src/
  components/         # React components (form, results table, etc.)
  services/           # Investment calculation logic
  models/             # TypeScript types
  App.tsx             # Main app component
  index.tsx           # Entry point
  index.css           # Tailwind CSS imports
```

## Customization
- Update Tailwind styles in `src/index.css` or component files
- Adjust calculation logic in `src/services/InvestmentCalculator.ts`

## License
ISC 