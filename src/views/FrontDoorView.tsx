import React from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import 'firebase/auth';

// Configure FirebaseUI.
const uiConfig = {

  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',

  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/welcome',

  // We will display Google as an auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

function FrontDoorView() {
  return (
    <div>
      <h1>Front Door</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export default FrontDoorView;
