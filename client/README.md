# macOS-style Web Interface

This project is a Vite + React-based web interface designed to mimic the macOS desktop experience. It's intended to be run on an Ubuntu server and accessed through a web browser.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your Ubuntu server. If you don't have them, you can install them using the following commands:

```bash
sudo apt update
sudo apt install nodejs npm
```

Verify the installation by checking the versions:
```bash
node -v
npm -v
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>/client
    ```

2.  **Install dependencies:**
    From the `client` directory, install the necessary npm packages:
    ```bash
    npm install
    ```

## Available Scripts

### Running the Development Server

To run the app in development mode, use the following command:

```bash
npm run dev
```

This will start the Vite development server and you can view the application by navigating to `http://<your-server-ip>:5173` in your web browser. The page will automatically reload if you make changes to the code.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with a production-ready version of the app.

### Previewing the Production Build

To preview the built assets locally before deploying, run:

```bash
npm run preview
```

### Serving the Production Build

To serve the production build, you can use a simple static server like `serve`.

1.  **Install `serve` globally:**
    ```bash
    sudo npm install -g serve
    ```

2.  **Serve the `dist` directory:**
    ```bash
    serve -s dist
    ```

This will serve the `dist` directory on a local port (usually 3000). You can then configure a reverse proxy with a web server like Nginx or Apache to make it accessible on port 80 or 443.

### Running Tests

Unit tests are powered by Vitest and Testing Library:

```bash
npm test
```
