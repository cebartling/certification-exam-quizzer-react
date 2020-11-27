import {types} from "mobx-state-tree";

export const UserModel = types.model({
  displayName: types.optional(types.string, ''),
  email: types.optional(types.string, ''),
  emailVerified: types.optional(types.boolean, false),
  photoURL: types.optional(types.string, ''),
  uid: types.optional(types.string, ''),
  phoneNumber: types.maybeNull(types.string),
  accessToken: types.optional(types.string, '')
});

const RootStore =
  types.model({
    currentUserModel: types.maybeNull(UserModel)
  }).actions(self => ({
    setCurrentUserModel(displayName: string | null,
                        email: string | null,
                        emailVerified: boolean,
                        photoURL: string | null,
                        uid: string,
                        phoneNumber: string | null,
                        accessToken: string | null) {
      self.currentUserModel = UserModel.create({
        // @ts-ignore
        displayName,
        // @ts-ignore
        email,
        emailVerified,
        // @ts-ignore
        photoURL,
        uid,
        // @ts-ignore
        phoneNumber,
        // @ts-ignore
        accessToken
      });
    },
    clearCurrentUserModel() {
      self.currentUserModel = null;
    }
  }));

export const store = RootStore.create({
  currentUserModel: null
});
