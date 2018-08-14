
import { auth, Auth } from './firebase';

export const doCreateUser = ( email , password) => auth.createUserWithEmailAndPassword(email,password);

export const doSignInUser = ( email , password ) => auth.signInWithEmailAndPassword(email,password);

export const doUpdateProfile = (name,photoUrl) => auth.currentUser.updateProfile({displayName:name , photoURL:photoUrl});

export const getToken = () => auth.currentUser.getIdToken();

export const doSignOut = () => auth.signOut();

export const getUserName = () => auth.currentUser ? auth.currentUser.displayName : '';

export const getProfilePhotoUrl = () => auth.currentUser ? auth.currentUser.photoURL : '';

export const doGoogleSignIn = (isMobile) => {
  const provider = new Auth.GoogleAuthProvider();
  return !isMobile ? auth.signInWithPopup(provider) : auth.signInWithRedirect(provider);
}