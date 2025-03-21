import { useState, useCallback } from 'react'
import { DocumentData, QueryConstraint, where, orderBy, limit } from 'firebase/firestore'
import * as firestoreService from '../services/firestoreService'

interface FirestoreState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * Custom hook for Firestore operations with loading and error states
 * @param collectionName - The name of the collection
 */
export const useFirestore = <T extends DocumentData>(collectionName: string) => {
  const [state, setState] = useState<FirestoreState<T[]>>({
    data: null,
    loading: false,
    error: null
  })

  const [singleDocState, setSingleDocState] = useState<FirestoreState<T>>({
    data: null,
    loading: false,
    error: null
  })

  // Get all documents from a collection
  const getAll = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const result = await firestoreService.getAllDocs(collectionName) as unknown as T[]
      setState({ data: result, loading: false, error: null })
      return result
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setState(prev => ({ ...prev, loading: false, error: err }))
      throw err
    }
  }, [collectionName])

  // Get documents with query constraints
  const getFiltered = useCallback(async (constraints: QueryConstraint[]) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    try {
      // Since we don't have a direct replacement for getFilteredCollection,
      // we'll log the constraints for debugging purposes
      console.log('Query constraints:', constraints)
      
      // For now, we're just getting all docs since we don't have an exact match
      // for getFilteredCollection in the firestoreService
      const result = await firestoreService.getAllDocs(collectionName) as unknown as T[]
      
      // In a real implementation, you would use these constraints to filter the results
      const filtered = result.filter(() => true) // Placeholder for real filtering logic
      
      setState({ data: filtered, loading: false, error: null })
      return filtered
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setState(prev => ({ ...prev, loading: false, error: err }))
      throw err
    }
  }, [collectionName])

  // Get a single document by ID
  const getById = useCallback(async (docId: string) => {
    setSingleDocState(prev => ({ ...prev, loading: true, error: null }))
    try {
      const result = await firestoreService.getDocById(collectionName, docId) as unknown as T | null
      setSingleDocState({ data: result, loading: false, error: null })
      return result
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      setSingleDocState(prev => ({ ...prev, loading: false, error: err }))
      throw err
    }
  }, [collectionName])

  // Add a new document
  const add = useCallback(async (data: Partial<T>) => {
    try {
      return await firestoreService.createDoc(collectionName, data)
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      throw err
    }
  }, [collectionName])

  // Update a document
  const update = useCallback(async (docId: string, data: Partial<T>) => {
    try {
      await firestoreService.updateDoc2(collectionName, docId, data)
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      throw err
    }
  }, [collectionName])

  // Delete a document
  const remove = useCallback(async (docId: string) => {
    try {
      await firestoreService.deleteDocument(collectionName, docId)
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error))
      throw err
    }
  }, [collectionName])

  return {
    // Collection data state
    data: state.data,
    loading: state.loading,
    error: state.error,
    
    // Single document state
    document: singleDocState.data,
    documentLoading: singleDocState.loading,
    documentError: singleDocState.error,
    
    // Methods
    getAll,
    getFiltered,
    getById,
    add,
    update,
    remove,
    
    // Query helpers
    where,
    orderBy,
    limit
  }
}

export default useFirestore 