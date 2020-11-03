import firebase from 'firebase/app';
export declare const snapshotToData: (snapshot: firebase.firestore.DocumentSnapshot, idField?: string | undefined) => {
    [x: string]: any;
} | undefined;
