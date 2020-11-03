import firebase from 'firebase/app';
import { LoadingHook } from '../util';
export declare type AuthStateHook = LoadingHook<firebase.User, firebase.auth.Error>;
declare const _default: (auth: firebase.auth.Auth) => LoadingHook<firebase.User, firebase.auth.Error>;
export default _default;
