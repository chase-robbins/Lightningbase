import { db } from './firebase'
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore'

/**
 * Generic Firestore CRUD service for any collection
 */

/**
 * Fetch all documents in a collection
 * @param collectionName - The name of the collection
 * @returns Promise with array of documents
 */
export const getAllDocs = async (collectionName: string) => {
  const q = query(collection(db, collectionName))
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

/**
 * Fetch a document by ID
 * @param collectionName - The name of the collection
 * @param docId - The document ID
 * @returns Promise with document data
 */
export const getDocById = async (collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    }
  } else {
    return null
  }
}

/**
 * Fetch documents matching a query
 * @param collectionName - The name of the collection
 * @param fieldPath - The field to query on
 * @param operator - The comparison operator
 * @param value - The value to compare against
 * @returns Promise with array of matching documents
 */
export const getDocsByQuery = async (
  collectionName: string,
  fieldPath: string,
  operator: any,
  value: any
) => {
  const q = query(collection(db, collectionName), where(fieldPath, operator, value))
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

/**
 * Create a new document with a specific ID
 * @param collectionName - The name of the collection
 * @param docId - The document ID
 * @param data - The document data
 * @returns Promise that resolves when the document is created
 */
export const createDocWithId = async (collectionName: string, docId: string, data: any) => {
  const docRef = doc(db, collectionName, docId)
  await setDoc(docRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  return docId
}

/**
 * Create a new document with auto-generated ID
 * @param collectionName - The name of the collection
 * @param data - The document data
 * @returns Promise with the ID of the created document
 */
export const createDoc = async (collectionName: string, data: any) => {
  const collectionRef = collection(db, collectionName)
  const docRef = await addDoc(collectionRef, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  return docRef.id
}

/**
 * Update an existing document
 * @param collectionName - The name of the collection
 * @param docId - The document ID
 * @param data - The updated fields
 * @returns Promise that resolves when the document is updated
 */
export const updateDoc2 = async (collectionName: string, docId: string, data: any) => {
  const docRef = doc(db, collectionName, docId)
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  })
}

/**
 * Delete a document
 * @param collectionName - The name of the collection
 * @param docId - The document ID
 * @returns Promise that resolves when the document is deleted
 */
export const deleteDocument = async (collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId)
  await deleteDoc(docRef)
} 