import {selector} from 'recoil';
import {userState} from './atoms';

export const photoURLState = selector({
  key: 'photoURLState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    // @ts-ignore
    const {photoURL} = get(userState);
    return photoURL;
  },
});
