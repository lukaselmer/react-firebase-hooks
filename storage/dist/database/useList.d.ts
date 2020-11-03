import firebase from 'firebase';
import { LoadingHook } from '../util';
export declare type ListHook = LoadingHook<firebase.database.DataSnapshot[], firebase.FirebaseError>;
export declare type ListKeysHook = LoadingHook<string[], firebase.FirebaseError>;
export declare type ListValsHook<T> = LoadingHook<T[], firebase.FirebaseError>;
export declare const useList: (query?: firebase.database.Query | null | undefined) => LoadingHook<firebase.database.DataSnapshot[], firebase.FirebaseError>;
export declare const useListKeys: (query?: firebase.database.Query | null | undefined) => LoadingHook<string[], firebase.FirebaseError>;
export declare const useListVals: <T>(query?: firebase.database.Query | null | undefined, options?: {
    keyField?: string | undefined;
} | undefined) => LoadingHook<T[], firebase.FirebaseError>;
