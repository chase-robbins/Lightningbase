# Firebase Functions

This directory contains the Firebase Cloud Functions for the REPLACE_ME_YOUR_APP_NAME application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the functions:
   ```bash
   npm run build
   ```

## Local Development with Emulators

To test the functions locally without affecting the production environment, you can use the Firebase Emulator Suite.

### Start the Functions Emulator Only

```bash
npm run emulate:functions
```

This will start only the Functions emulator on port 5001.

### Connecting from the Frontend

The frontend is already configured to connect to the Functions emulator when running in development mode. The connection is set up in `frontend/src/services/firebase.ts`.

When you run the frontend in development mode, it will automatically connect to the Functions emulator:

```javascript
// In frontend/src/services/firebase.ts
if (process.env.NODE_ENV === 'development') {
  // Connect to Functions emulator
  connectFunctionsEmulator(functions, 'localhost', 5001);
  
  console.log('Connected to Firebase Functions emulator');
}
```

## Available Functions

- `createInvite`: Creates an invite link for affiliates
- `trackEvent`: Tracks events for affiliate conversions
- `onAppCreatedOrUpdated`: Triggers when an app is created or updated

## Deployment

To deploy the functions to Firebase:

```bash
npm run deploy
```

This will deploy all functions to your Firebase project.

## Testing

You can test the functions locally using the Firebase Emulator Suite. Make sure to run the frontend in development mode to connect to the emulator. 