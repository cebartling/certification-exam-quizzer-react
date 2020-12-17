import React from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import 'firebase/auth';

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/welcome',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
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
