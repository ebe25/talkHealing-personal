import { API_ENDPOINT, REQUEST_METHOD } from "../../api/endpoint.types"
import * as SCHEMAS from "./schemas"

const TRANSFORMERS = {
    referralSource: (data:Record<string,any>) => ({
        ...data,
    }),
    userTransformer: (data:Record<string,any>) => ({
        ...data,
        created_on: new Date(data.created_on),
        edited_on: new Date(data.edited_on),
    }),
    userPaginatedTransformer: (data:Record<string,any>) => ({
        ...data,
        user: {
            ...data.user,
            created_on: new Date(data.created_on),
            edited_on: new Date(data.edited_on),
        }
    }),
    accessTokenTransformer: (data:Record<string,any>) => ({
        ...data,
        user: TRANSFORMERS.userTransformer(data.user),
    }),
}

export const API_ENDPOINTS = {
    registerUser: new API_ENDPOINT({
        url: "/auth/registration/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    loginUser: new API_ENDPOINT({
        url: "/auth/login/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: TRANSFORMERS.userPaginatedTransformer,
    }),
    verifyEmail: new API_ENDPOINT({
        url: "/auth/registration/verify-email/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    resendVerificationEmail: new API_ENDPOINT({
        url: "/auth/onboarding/verify-email/resend/",
        method: REQUEST_METHOD.GET,
        response: null,
        transformer: null,
    }),
    verifyPhoneNumber: new API_ENDPOINT({
        url: "/auth/onboarding/verify-phone-number/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    resendVerificationSMS: new API_ENDPOINT({
        url: "auth/onboarding/verify-phone-number/resend/",
        method: REQUEST_METHOD.GET,
        response: null,
        transformer: null,
    }),
    changePassword: new API_ENDPOINT({
        url: "/auth/password/change/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    createPassword: new API_ENDPOINT({
        url: "/auth/create-password/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    resetPassword: new API_ENDPOINT({
        url: "/auth/password/reset/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    resetPasswordConfirm: new API_ENDPOINT({
        url: "/auth/password/reset/confirm/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    loginUserData: new API_ENDPOINT({
        url: "/auth/user/",
        method: REQUEST_METHOD.GET,
        response: null,
        transformer: TRANSFORMERS.userTransformer,
    }),
    avatar: new API_ENDPOINT({
        url: "/user/avatar/",
        method: REQUEST_METHOD.GET,
        response: null,
        transformer: TRANSFORMERS.userTransformer,
    }),
    editUser: new API_ENDPOINT({
        url: "/auth/user/",
        method: REQUEST_METHOD.PATCH,
        response: SCHEMAS.User,
        transformer: TRANSFORMERS.userTransformer,
    }),
    logoutuser: new API_ENDPOINT({
        url: "/auth/logout/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    getReferralSource: new API_ENDPOINT({
        url: "/auth/onboarding/referral-source/",
        method: REQUEST_METHOD.GET,
        response: SCHEMAS.ReferralSource,
        transformer: null,
    }),
    termsOfUse: new API_ENDPOINT({
        url: "/auth/onboarding/terms-of-use/",
        method: REQUEST_METHOD.GET,
        response: SCHEMAS.TermsOfUse,
        transformer: null,
    }),
    getTermsVideo: new API_ENDPOINT({
        url: "/auth/onboarding/terms_video/",
        method: REQUEST_METHOD.GET,
        response: SCHEMAS.User,
        transformer: TRANSFORMERS.userTransformer,
    }),
    emailChange: new API_ENDPOINT({
        url: "/auth/email-change/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    emailChangeVerify: new API_ENDPOINT({
        url: "/auth/email-change/verify-change-email/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    emailChangeOtpResend: new API_ENDPOINT({
        url: "/auth/email-change/verify-change-email/resend/",
        method: REQUEST_METHOD.GET,
        response: null,
        transformer: null,
    }),
    phoneChange: new API_ENDPOINT({
        url: "/auth/phone-change/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
    phoneChangeVerify: new API_ENDPOINT({
        url: "/auth/phone-change/change-phone/",
        method: REQUEST_METHOD.POST,
        response: null,
        transformer: null,
    }),
}
