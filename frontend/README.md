# React + Vite Frontend

This is a React application built with Vite, featuring routing and authentication.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- React Router for client-side routing
- Firebase Authentication
- Protected routes
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies:

```bash
npm install
```

4. Copy the `.env.example` file to `.env` and fill in your Firebase configuration:

```bash
cp .env.example .env
```

5. Start the development server:

```bash
npm run dev
```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will generate the production build in the `public` directory, which is configured for Firebase hosting.

## Deployment

The project is configured to deploy to Firebase Hosting. After building, you can deploy using the Firebase CLI:

```bash
firebase deploy --only hosting
```

## Project Structure

- `src/components/` - Reusable UI components
- `src/contexts/` - React context providers
- `src/pages/` - Page components
- `src/services/` - Service integrations (Firebase, etc.)

## License

This project is licensed under the MIT License.
