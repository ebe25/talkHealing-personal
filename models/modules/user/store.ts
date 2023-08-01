import { types, flow } from "mobx-state-tree";
import { withEnvironment } from "../../extensions/with-environment";
import { ACTION_RESPONSES } from "../../api/endpoint.types";
import * as UserSchemas from "./schemas";
import { API_ENDPOINTS } from "./endpoints";
import * as storage from "localforage";
/**
 * Model description here for TypeScript hints.
 */

export const UserStore = types
  .model({
    loggedInUserData: types.maybeNull(UserSchemas.LoggedInUser),
    userData: types.maybeNull(UserSchemas.User),
    avatarData: types.maybeNull(UserSchemas.AvatarPaginated),
    termsOfUse: types.maybeNull(UserSchemas.TermsOfUse),
    referralSourceData: types.maybeNull(UserSchemas.ReferralSourcePaginated),
    is_logged_in: types.maybeNull(types.boolean),
    remember_me: types.maybeNull(types.boolean),
    isLoggedInUser: types.maybeNull(types.boolean),
    verfyEmailData: types.maybeNull(UserSchemas.LoggedInUser),
    address: types.maybeNull(UserSchemas.AddressPaginated),
    getAddress: types.maybeNull(UserSchemas.Address),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    getUserLoggedInStatus: flow(function* (userLogin: boolean) {
      self.isLoggedInUser = userLogin;
      return true;
    }),
    loginUser: flow(function* (email: string, password: string) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.loginUser,
        {
          email: email,
          password: password,
        }
      );
      switch (response.status) {
        case 200:
          self.loggedInUserData = null;
          yield storage.clear();
          self.is_logged_in = true;
          self.loggedInUserData = UserSchemas.LoggedInUser.create(
            response.data
          );
          yield storage.setItem(
            self.environment.api.config.token_key,
            response.data[self.environment.api.config.token_key]
          );
          return ACTION_RESPONSES.success;
        case 400:
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.non_field_errors[0]
          };
        case 401:
          return ACTION_RESPONSES.failure;
        case 500:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          return ACTION_RESPONSES.success;
      }
    }),
    logoutUser: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.logoutuser
      );
      switch (response.status) {
        case 204:
        case 200:
          yield storage.removeItem(self.environment.api.config.token_key);
          yield storage.clear();
          self.is_logged_in = false;
          self.loggedInUserData = null;
          return ACTION_RESPONSES.success;
        default:
          yield storage.clear();
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    deleteUser: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.deleteUser
      );
      switch (response.status) {
        case 204:
          yield storage.removeItem(self.environment.api.config.token_key);
          yield storage.clear();
          self.is_logged_in = false;
          self.loggedInUserData = null;
          return ACTION_RESPONSES.success;
        default:
          yield storage.clear();
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    signupUser: flow(function* (
      email: string,
      full_name: string,
      phone: string,
      is_terms_agreed: boolean
    ) {
      storage.clear();
      self.is_logged_in = false;
      const response = yield self.environment.api.call(
        API_ENDPOINTS.registerUser,
        {
          email: email,
          full_name: full_name,
          phone: phone,
          is_terms_agreed: is_terms_agreed
        }
      );
      let error = null;
      switch (response.status) {
        case 201:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          break;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    verifyEmail: flow(function* (key: string) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.verifyEmail,
        {
          key: key,
        }
      );
      switch (response.status) {
        case 200:
          self.verfyEmailData = UserSchemas.LoggedInUser.create(
            response.data
          );
          yield storage.setItem(
            self.environment.api.config.token_key,
            response.data[self.environment.api.config.token_key]
          );
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    resendVerificationEmail: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.resendVerificationEmail
      );
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    verifyPhoneNumber: flow(function* (otp: number) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.verifyPhoneNumber,
        {
          otp: otp,
        }
      );
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
      }
      return ACTION_RESPONSES.failure;
    }),
    createPassword: flow(function* (new_password1: string, new_password2: string) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.createPassword,
        {
          new_password1: new_password1,
          new_password2: new_password2
        }
      );
      switch (response.status) {
        case 200:
          self.is_logged_in = true;
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
      }
      return ACTION_RESPONSES.failure;
    }),
    resendVerificationSMS: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.resendVerificationSMS
      );
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
      }
      return ACTION_RESPONSES.failure;
    }),
    getLoginUserData: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.loginUserData
      );
      switch (response.status) {
        case 200:
          self.userData = UserSchemas.User.create(response.data)
          return ACTION_RESPONSES.success;
        case 405:
          storage.clear();
          self.is_logged_in = false;
          break;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    getReferralSource: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.getReferralSource
      );
      switch (response.status) {
        case 200:
          self.referralSourceData = UserSchemas.ReferralSourcePaginated.create(
            response.data
          );
          return ACTION_RESPONSES.success;
        case 401:
          console.log("Authentication credentials were not provided.");
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
    }),
    getAvatar: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.avatar
      );
      switch (response.status) {
        case 200:
          self.avatarData = UserSchemas.AvatarPaginated.create(response.data)
          return ACTION_RESPONSES.success;
        case 405:
          storage.clear();
          self.is_logged_in = false;
          break;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    rememberMe: flow(function* (val: boolean) {
      self.remember_me = val;
    }),
    editUser: flow(function* (
      data: {
        avatar?: string | null;
        full_name?: string | null;
        email?: string | null;
        phone?: string | null;
      }
        | FormData
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.editUser,
        data
      );
      switch (response.status) {
        case 200:
          // self.loggedInUserData.user = UserSchemas.User.create(response.data);
          return ACTION_RESPONSES.success;
        case 400:
          return { ...ACTION_RESPONSES.failure, code: response.status };
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    resendEmail: flow(function* (email: string | null) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.resendVerificationEmail,
        { email }
      );
      switch (response.status) {
        case 200:
          // here we have design a modal which will be showing the message of resend email
          return true;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return false;
    }),
    changePassword: flow(function* (
      old_password: string,
      new_password1: string,
      new_password2: string
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.changePassword,
        {
          old_password: old_password,
          new_password1: new_password1,
          new_password2: new_password2,
        }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.old_password};
        case 401:
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.old_password};
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    emailChange: flow(function* (
      email: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.emailChange,
        {
          email: email,
        }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.code }
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    emailChangeVerify: flow(function* (
      otp: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.emailChangeVerify,
        {
          otp: otp,
        }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.message};
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    emailChangeOtpResend: flow(function* (
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.emailChangeOtpResend,{} );
      let error = null;
      switch (response.status) {
        case 200:
          return { ...ACTION_RESPONSES.success, code: response.status , message : response.data.message}
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.message};
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    phoneChange: flow(function* (
      phone: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.phoneChange,
        {
          phone: phone,
        }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.phone};
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    phoneChangeVerify: flow(function* (
      otp: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.phoneChangeVerify,
        {
          otp: otp,
        }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.message};
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    phoneChangeResend: flow(function* ( ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.phoneChangeResend,{ }
      );
      let error = null;
      switch (response.status) {
        case 200:
          return { ...ACTION_RESPONSES.success, code: response.status , message : response.data.message}
        case 400:
          error = response.data;
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.message};
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    getTermsOfUse: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.termsOfUse
      );
      switch (response.status) {
        case 200:
          self.termsOfUse = UserSchemas.TermsOfUse.create(response.data);
          return ACTION_RESPONSES.success;
        case 401:
          console.log("Authentication credentials were not provided.");
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
    }),
    resetPassword: flow(function* (
      email: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.resetPassword, {
        email: email,
      });
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          break;
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    resetPasswordConfirm: flow(function* (
      new_password1: string,
      new_password2: string,
      uid: string,
      token: string,
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.resetPasswordConfirm, {
        new_password1: new_password1,
        new_password2: new_password2,
        uid: uid,
        token: token,
      });
      let error = null;
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 400:
          error = response.data;
          break;
        case 401:
          return ACTION_RESPONSES.failure;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    getUserAddress: flow(function* () {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.userAddress
      );
      switch (response.status) {
        case 200:
          self.address = UserSchemas.AddressPaginated.create(response.data)
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.success;;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    getUserAddressById: flow(function* (id:string|undefined) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.getAddressById, {}, { id: id }
      );
      console.log(response.data)
      switch (response.status) {
        case 200:
          self.getAddress = UserSchemas.Address.create(response.data)
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.success;;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    addressUpdate: flow(function* ( data, id:string|undefined) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.addressUpdate, data, { id: id }
      );
      console.log(response.data)
      switch (response.status) {
        case 200:
          self.getAddress = UserSchemas.Address.create(response.data)
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.success;;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    addressDelete: flow(function* (id:string|undefined) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.addressDelete, {}, { id: id }
      );
      console.log(response.data)
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 204:
          return ACTION_RESPONSES.success;
        case 400:
          return ACTION_RESPONSES.success;;
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
    createAddress: flow(function* (
      data
    ) {
      const response = yield self.environment.api.call(
        API_ENDPOINTS.createAddress, data
      );
      console.log(response.data)
      switch (response.status) {
        case 200:
          return ACTION_RESPONSES.success;
        case 201:
          return ACTION_RESPONSES.success;
        case 400:
          return { ...ACTION_RESPONSES.failure, code: response.status , error : response.data.message};
        default:
          console.error("UNHANDLED ERROR");
          break;
      }
      return ACTION_RESPONSES.failure;
    }),
  }));
