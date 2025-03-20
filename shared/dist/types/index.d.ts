export type PayoutType = 'FIXED' | 'PERCENTAGE';
export interface FirestoreTimestamp {
    toDate: () => Date;
    seconds: number;
    nanoseconds: number;
}
export interface AppData {
    name: string;
    url: string;
    type: string;
    settings: {
        enableNotifications: boolean;
        theme: string;
    };
    apiKey?: string;
    createdAt?: FirestoreTimestamp;
    updatedAt?: FirestoreTimestamp;
    _lastUpdatedByFunction?: boolean;
    [key: string]: any;
}
export interface Event {
    id: string;
    name: string;
    description: string;
    payoutType: PayoutType;
    INTERNAL_ID: string;
}
export interface Group {
    id: string;
    name: string;
    description: string;
}
export interface PricingStructure {
    [eventId: string]: {
        [groupId: string]: number;
    };
}
export interface NewEvent {
    name: string;
    description: string;
    payoutType: PayoutType;
}
export interface NewGroup {
    name: string;
    description: string;
}
export interface SampleEvent {
    name: string;
    description: string;
    payoutType: PayoutType;
}
