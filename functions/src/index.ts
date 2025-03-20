/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as admin from "firebase-admin";

// Initialize Firebase Admin
admin.initializeApp();

// Example handler export - uncomment and customize as needed
// export {exampleFunction} from "./handlers/exampleFunction";
export {onUserCreated} from "./handlers/onUserCreated";

/**
 * Add your Cloud Functions below
 * 
 * Examples:
 * - HTTP Callable Functions
 * - Firestore Triggers
 * - Authentication Triggers
 * - Storage Triggers
 * - Pub/Sub Triggers
 * - Scheduled Functions
 */
