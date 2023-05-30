import { Instance, types } from "mobx-state-tree"
import { maybeNull } from "mobx-state-tree/dist/internal"
import { Images } from "../../../public"
import { BaseModelSchemaBase, PaginatedSchemaBase } from "../../api/endpoint.types"

export const ReferralSource = types.model({
  // ...BaseModelSchemaBase,
  id: types.identifier,
  name: types.string,
  description: types.maybeNull(types.string),
})
export interface ReferralSource extends Instance<typeof ReferralSource> { }

export const ReferralSourcePaginated = types.model({
  ...PaginatedSchemaBase,
  results: types.array(ReferralSource),
})
export interface ReferralSourcePaginated extends Instance<typeof ReferralSourcePaginated> { }

export const Avatar = types.model({
  id: types.identifier,
  created_on: types.maybeNull(types.string),
  edited_on: types.maybeNull(types.string),
  avatar: types.maybeNull(types.string),
  order: types.maybeNull(types.number)
})
export interface Avatar extends Instance<typeof Avatar> { }

export const AvatarPaginated = types.model({
  ...PaginatedSchemaBase,
  results: types.array(Avatar),
})
export interface AvatarPaginated extends Instance<typeof AvatarPaginated> { }

// user schema 
export const User = types.model({
  ...BaseModelSchemaBase,
  is_password_set: types.boolean,
  is_phone_verified: types.boolean,
  is_terms_agreed: types.boolean,
  avatar: types.string,
  full_name: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
})

export interface UserType extends Instance<typeof User> { }

export const UserPaginated = types.model({
  ...PaginatedSchemaBase,
  results: types.array(User),
})
export interface UserPaginatedType extends Instance<typeof UserPaginated> { }

// logged in user schema
export const LoggedInUser = types.model({
  key: types.string,
})

export interface LoggedInUserType extends Instance<typeof LoggedInUser> { }
export const LoggedInUserPaginated = types.model({
  ...PaginatedSchemaBase,
  results: types.array(LoggedInUser),
})
export interface LoggedInUserPaginatedType extends Instance<typeof LoggedInUserPaginated> { }
export const TermsOfUse = types.model({
  // ...BaseModelSchemaBase,
  privacy_policy: types.identifier,
  terms_of_use: types.string,
  agree_conditions: types.array(types.string),

})
export const Action = types.model({
  // ...BaseModelSchemaBase,
  label: types.string,
  target_external_url: types.string,
  target_internal_url: types.string,
})