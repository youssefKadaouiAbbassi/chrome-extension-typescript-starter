<h1 align="center">Chrome Extension TypeScript Starter</h1>

## Overview

**Chrome Extension TypeScript Starter** is a comprehensive toolkit for building Chrome extensions using TypeScript. It includes a set of tools and best practices for efficient development, testing, and deployment.

## Features

- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript.
- **[Webpack](https://webpack.js.org/)**: Module bundler to compile and bundle your code.
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Jest](https://jestjs.io/)**: Delightful JavaScript Testing Framework.
- **Example Code**:
  - Chrome Storage usage
  - Options page (v2)
  - Content scripts
  - Badge counter on the extension icon
  - Background scripts

---

## Project Structure

- **src/typescript**: TypeScript source files.
- **src/assets**: Static assets like icons, stylesheets, etc.
- **dist**: Compiled Chrome Extension directory.
- **dist/js**: Bundled JavaScript files.

---

## Installation

### Prerequisites

- [Bun](https://bun.sh/) should be installed on your system.

### Steps

1. Clone the repository:
   ```bash
   git clone git clone git@github.com:youssefKadaouiAbbassi/chrome-extension-typescript-starter
   ```
2. Change to the project directory:
   ```bash
   cd chrome-extension-typescript-starter
   ```
3. Install dependencies:
   ```bash
   bun install
   ```

---

## Development Setup

### Running the Development Server

To compile and bundle your code for development, run:

```bash
bun dev
```

---

## Production Setup

### Building for Production

To create an optimized build for production, use:

```bash
bun run build
```

---

These commands will bundle your TypeScript and other assets into the `dist` directory, ready for deployment.

---

## Load the Extension into Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on "Load unpacked" and select the `dist` directory from your project.

---

## Testing

### Running Unit Tests

To run tests with Jest, use:

```bash
bun run test
```
