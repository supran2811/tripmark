import { auth } from './firebase';

export const doCreateUser = ( email , password) => auth.createUserWithEmailAndPassword(email,password);
export const doSignInUser = ( email , password ) => auth.signInWithEmailAndPassword(email,password);

export const doUpdateProfile = (name,photoUrl) => auth.currentUser.updateProfile({displayName:name , photoURL:photoUrl});

export const doSignOut = () => auth.signOut();