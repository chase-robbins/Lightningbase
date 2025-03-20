import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";

/**
 * Function that triggers when a new user is created in Firebase Authentication
 * Creates a document in the users collection with the user's ID
 */
export const onUserCreated = functions.auth.user().onCreate(async (user) => {
  const db = admin.firestore();
  
  try {
    // Create a new user document in Firestore
    await db.collection("users").doc(user.uid).set({
      email: user.email,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      lastLogin: admin.firestore.FieldValue.serverTimestamp(),
    });
    
    console.log(`Created user document for user: ${user.uid}`);
    return null;
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
}); 