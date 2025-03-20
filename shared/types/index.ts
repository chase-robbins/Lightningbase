// Firestore timestamp type
export interface FirestoreTimestamp {
  toDate: () => Date;
  seconds: number;
  nanoseconds: number;
}

// Base user interface
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt?: FirestoreTimestamp;
  lastLogin?: FirestoreTimestamp;
}

// Example app data interface
export interface AppData {
  name: string;
  description: string;
  settings: {
    theme: string;
    notifications: boolean;
  };
  createdAt?: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
  [key: string]: any; // Allow for additional properties
}

// Example interface for API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
