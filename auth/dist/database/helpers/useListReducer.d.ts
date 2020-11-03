import firebase from 'firebase/app';
declare type KeyValueState = {
    keys?: string[];
    values?: firebase.database.DataSnapshot[];
};
declare type ReducerState = {
    error?: firebase.FirebaseError;
    loading: boolean;
    value: KeyValueState;
};
declare type AddAction = {
    type: 'add';
    previousKey?: string | null;
    snapshot: firebase.database.DataSnapshot | null;
};
declare type ChangeAction = {
    type: 'change';
    snapshot: firebase.database.DataSnapshot | null;
};
declare type EmptyAction = {
    type: 'empty';
};
declare type ErrorAction = {
    type: 'error';
    error: firebase.FirebaseError;
};
declare type MoveAction = {
    type: 'move';
    previousKey?: string | null;
    snapshot: firebase.database.DataSnapshot | null;
};
declare type RemoveAction = {
    type: 'remove';
    snapshot: firebase.database.DataSnapshot | null;
};
declare type ResetAction = {
    type: 'reset';
};
declare type ValueAction = {
    type: 'value';
};
declare type ReducerAction = AddAction | ChangeAction | EmptyAction | ErrorAction | MoveAction | RemoveAction | ResetAction | ValueAction;
declare const _default: () => [ReducerState, import("react").Dispatch<ReducerAction>];
export default _default;
