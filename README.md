# Lightningbase ⚡ React + Firebase (Functions, Firestore, Auth, Hosting) Template 

A full-stack monorepo template for building SaaS applications with React, Firebase, and TypeScript.

## Features

- 🔥 **Firebase Integration**: Authentication, Firestore, Cloud Functions, and Hosting
- ⚛️ **React**: Modern React with functional components and hooks
- 🧩 **TypeScript**: Type safety throughout the entire codebase
- 🏗️ **Monorepo Structure**: Organized architecture with shared code
- 🚀 **Ready-to-deploy**: Configuration for Firebase hosting and GitHub Actions
- 🛠️ **Developer Experience**: ESLint, Prettier, and TypeScript for a great DX

## Project Structure

```
├── .github/             # GitHub Actions workflows
├── firestore/           # Firestore rules and indexes
├── frontend/            # React application 
├── functions/           # Firebase Cloud Functions
├── landing/             # Landing page (static HTML/CSS/JS)
├── shared/              # Shared TypeScript code (types, utilities)
└── .firebaserc          # Firebase project configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase account and project

### Setup Instructions

1. **Clone the template**

```bash
git clone https://github.com/yourusername/react-firebase-template.git
cd react-firebase-template
```

2. **Create a Firebase project**

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable Authentication, Firestore, Functions, and Hosting

3. **Configure environment variables**

- Copy `.env.example` to `.env`
- Fill in your Firebase configuration values
- You can find these in your Firebase project settings

```bash
cp .env.example .env
```

4. **Update Firebase configuration**

- Update `.firebaserc` with your Firebase project ID
- Update hosting targets in `.firebaserc` if needed

5. **Install dependencies**

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install functions dependencies
cd ../functions
npm install

# Install shared dependencies
cd ../shared
npm install
```

6. **Run the development server**

```bash
# Start the frontend development server
cd frontend
npm run dev

# In another terminal, start the functions emulator
cd functions
npm run serve
```

7. **Deploy to Firebase**

```bash
# Build and deploy everything
firebase deploy

# Or deploy individual components
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore
```

## Customization

### Adding New Pages

1. Create a new page component in `frontend/src/pages/`
2. Add a route in `frontend/src/App.tsx`

### Adding Cloud Functions

1. Create a new function in `functions/src/handlers/`
2. Export the function in `functions/src/index.ts`

### Modifying Firestore Rules

Edit `firestore/rules.rules` to adjust security rules for your collections.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Firebase](https://firebase.google.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/) 