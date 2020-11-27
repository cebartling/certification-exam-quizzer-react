import React from 'react';
import {store} from '../MobxStateTree';
import {getSnapshot} from 'mobx-state-tree';

function WelcomeView() {

  const storeSnapshot = getSnapshot(store);
  console.log(storeSnapshot.currentUserModel);

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

export default WelcomeView;
