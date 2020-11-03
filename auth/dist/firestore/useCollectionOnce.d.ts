import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type CollectionOnceHook = LoadingHook<firebase.firestore.QuerySnapshot, Error>;
export declare type CollectionDataOnceHook<T> = LoadingHook<T[], Error>;
export declare const useCollectionOnce: (query?: firebase.firestore.Query<firebase.firestore.DocumentData> | null | undefined, options?: {
    getOptions?: firebase.firestore.GetOptions | undefined;
} | undefined) => LoadingHook<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>, Error>;
export declare const useCollectionDataOnce: <T>(query?: firebase.firestore.Query<firebase.firestore.DocumentData> | null | undefined, options?: {
    getOptions?: firebase.firestore.GetOptions | undefined;
    idField?: string | undefined;
} | undefined) => LoadingHook<T[], Error>;
