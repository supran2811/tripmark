
import { auth, Auth } from './firebase';
export const doCreateUser = ( email , password) => auth.createUserWithEmailAndPassword(email,password);
export const doSignInUser = ( email , password ) => auth.signInWithEmailAndPassword(email,password);

export const doUpdateProfile = (name,photoUrl) => auth.currentUser.updateProfile({displayName:name , photoURL:photoUrl});

export const getToken = () => auth.currentUser.getIdToken();

export const doSignOut = () => auth.signOut();

export const getCurrentUser = () => auth.currentUser;

export const doGoogleSignIn = (isMobile) => {
  console.log("Inside doGoogleSignIn!!");
  const provider = new Auth.GoogleAuthProvider();

  return !isMobile ? auth.signInWithPopup(provider) : auth.signInWithRedirect(provider);
}