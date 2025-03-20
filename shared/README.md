# REPLACE_ME_YOUR_APP_NAME Shared Types

This package contains shared TypeScript types and interfaces used across the REPLACE_ME_YOUR_APP_NAME application, including both the frontend and backend (Firebase Functions).

## Purpose

The shared types ensure consistency between the frontend and backend, reducing duplication and preventing type mismatches. This is particularly important for:

- API request and response structures
- Database schema definitions
- Business logic models

## Usage

### In Firebase Functions

```typescript
// Import specific types
import { UserProfile, Transaction, ApiResponse } from "../../shared/types";

// Use the types in your functions
export const createUser = onRequest(async (request, response) => {
  // ...
  const userProfile: UserProfile = {
    // ...
  };
  // ...
});
```

### In Frontend

```typescript
// Import specific types
import { UserProfile, Transaction, ApiResponse } from "../../shared/types";

// Use the types in your components
interface UserComponentProps {
  user: UserProfile;
}

const UserComponent: React.FC<UserComponentProps> = ({ user }) => {
  // ...
};
```

## Available Types

The package includes types for:

- User profiles (admin, affiliate, merchant, customer)
- Products
- Affiliate links
- Transactions
- Payouts
- API responses
- Analytics data
- And more

## Development

When adding new types or modifying existing ones, make sure to:

1. Keep the types consistent with the database schema
2. Add proper documentation
3. Rebuild the package after changes:

```bash
cd shared
npm run build
```

## Building

To build the shared types package:

```bash
npm run build
```

This will compile the TypeScript files and generate the necessary type declarations. 