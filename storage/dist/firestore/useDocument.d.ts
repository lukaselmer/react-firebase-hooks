import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type DocumentHook = LoadingHook<firebase.firestore.DocumentSnapshot, Error>;
export declare type DocumentDataHook<T> = LoadingHook<T, Error>;
export declare const useDocument: (docRef?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null | undefined, options?: {
    snapshotListenOptions?: firebase.firestore.SnapshotListenOptions | undefined;
} | undefined) => LoadingHook<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>, Error>;
export declare const useDocumentData: <T>(docRef?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null | undefined, options?: {
    idField?: string | undefined;
    snapshotListenOptions?: firebase.firestore.SnapshotListenOptions | undefined;
} | undefined) => LoadingHook<T, Error>;
