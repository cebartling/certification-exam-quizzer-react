import firebase, {User} from 'firebase';
import {store} from './MobxStateTree';


const initializeFirebaseApp = function (setUser: (valOrUpdater: (((currVal: null) => null) | null)) => void) {
  firebase.auth().onAuthStateChanged(function (user: User | null) {
    if (user) {
      const {displayName, email, emailVerified, photoURL, uid, phoneNumber} = user;
      user.getIdToken().then(function (accessToken: string) {
        store.setCurrentUserModel(displayName, email, emailVerified, photoURL, uid, phoneNumber, accessToken);
        // @ts-ignore
        setUser({displayName, email, emailVerified, photoURL, uid, phoneNumber, accessToken});
        console.log('User signed in');
      });
    } else {
      store.clearCurrentUserModel();
      console.log('User signed out')
    }
  }, function (error) {
    console.error(error);
  });
};

export default initializeFirebaseApp;
