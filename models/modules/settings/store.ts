import { types, flow } from "mobx-state-tree"
import { withEnvironment } from "../../extensions/with-environment"
import * as SCHEMAS from "./schemas"
import { API_ENDPOINTS } from "./endpoints"
/**
 * Model description here for TypeScript hints.
 */

export const SettingsStore = types
    .model({
        settings: types.maybeNull(SCHEMAS.Settings),
        faqs: types.maybeNull(SCHEMAS.FAQPaginated),
        faq: types.maybeNull(SCHEMAS.FAQ),
        IsReferToFriend: types.maybeNull(types.boolean)
    })
    .extend(withEnvironment)
    .actions((self) => ({
        getSettings: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getSettings)
            switch (response.status) {
                case 200:
                    self.settings = SCHEMAS.Settings.create(response.data)
                    return true
                case 405:
                    return false
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return false
        }),
        editSettings: flow(function* (data: {
            sms_notification?: boolean,
            email_notification?: boolean,
            push_notification?: boolean,
            self_deactivation_status?: boolean,
        }) {
            const response = yield self.environment.api.call(API_ENDPOINTS.editSettings, data)
            switch (response.status) {
                case 200:
                    self.settings = SCHEMAS.Settings.create(response.data)
                    return true
                case 405:
                    return false
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return false
        }),
        getFaqs: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getFaqs)
            switch (response.status) {
                case 200:
                    self.faqs = SCHEMAS.FAQPaginated.create(response.data)
                    return true
                case 405:
                    return false
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return false
        }),
        getFaq: flow(function* (id: string) {
            const response = yield self.environment.api.call(API_ENDPOINTS.getFaqs, {}, { id: id })
            switch (response.status) {
                case 200:
                    self.faq = SCHEMAS.FAQ.create(response.data)
                    return true
                case 405:
                    return false
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return false
        }),
        referToFriend: flow(function* (data: {
            full_name: string,
            email?: string,
            phone?: string
        }) {
            const response = yield self.environment.api.call(API_ENDPOINTS.referToFriend, data)
            switch (response.status) {
                case 200:
                    self.IsReferToFriend = true
                    return true
                case 405:
                    self.IsReferToFriend = false
                    return false
                default:
                    self.IsReferToFriend = false
                    console.error("UNHANDLED ERROR")
                    break
            }
            return false
        }),
    }))
