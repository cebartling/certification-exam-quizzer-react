import React from 'react';
import {getSnapshot} from 'mobx-state-tree';
import {store} from '../MobxStateTree';
import './ProfilePicture.scss';

function ProfilePicture() {
  const snapshot = getSnapshot(store);

  if (snapshot.currentUserModel?.photoURL) {
    return (
      <img className="profile-picture" src={snapshot.currentUserModel?.photoURL} alt="Profile"/>
    );
  } else {
    return null;
  }
}

export default ProfilePicture;
