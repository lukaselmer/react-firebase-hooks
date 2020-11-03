import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type CollectionHook = LoadingHook<firebase.firestore.QuerySnapshot, Error>;
export declare type CollectionDataHook<T> = LoadingHook<T[], Error>;
export declare const useCollection: (query?: firebase.firestore.Query<firebase.firestore.DocumentData> | null | undefined, options?: {
    snapshotListenOptions?: firebase.firestore.SnapshotListenOptions | undefined;
} | undefined) => LoadingHook<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>, Error>;
export declare const useCollectionData: <T>(query?: firebase.firestore.Query<firebase.firestore.DocumentData> | null | undefined, options?: {
    idField?: string | undefined;
    snapshotListenOptions?: firebase.firestore.SnapshotListenOptions | undefined;
} | undefined) => LoadingHook<T[], Error>;
