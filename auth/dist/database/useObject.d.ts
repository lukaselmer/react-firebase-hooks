import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type ObjectHook = LoadingHook<firebase.database.DataSnapshot, firebase.FirebaseError>;
export declare type ObjectValHook<T> = LoadingHook<T, firebase.FirebaseError>;
export declare const useObject: (query?: firebase.database.Query | null | undefined) => LoadingHook<firebase.database.DataSnapshot, firebase.FirebaseError>;
export declare const useObjectVal: <T>(query?: firebase.database.Query | null | undefined, options?: {
    keyField?: string | undefined;
} | undefined) => LoadingHook<T, firebase.FirebaseError>;
