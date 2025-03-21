export interface FirestoreTimestamp {
    toDate: () => Date;
    seconds: number;
    nanoseconds: number;
}
export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    createdAt?: FirestoreTimestamp;
    lastLogin?: FirestoreTimestamp;
}
export interface AppData {
    name: string;
    description: string;
    settings: {
        theme: string;
        notifications: boolean;
    };
    createdAt?: FirestoreTimestamp;
    updatedAt?: FirestoreTimestamp;
    [key: string]: any;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: string;
}
