import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type DocumentOnceHook = LoadingHook<firebase.firestore.DocumentSnapshot, Error>;
export declare type DocumentDataOnceHook<T> = LoadingHook<T, Error>;
export declare const useDocumentOnce: (docRef?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null | undefined, options?: {
    getOptions?: firebase.firestore.GetOptions | undefined;
} | undefined) => LoadingHook<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>, Error>;
export declare const useDocumentDataOnce: <T>(docRef?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null | undefined, options?: {
    getOptions?: firebase.firestore.GetOptions | undefined;
    idField?: string | undefined;
} | undefined) => LoadingHook<T, Error>;
