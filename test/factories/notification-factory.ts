import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        recipientId: "RecipientId-example",
        content: new Content("notification"),
        category: "social",
        ...override,
    })
}