/* eslint-disable prettier/prettier */
import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe("Count Recipient Notifications", () => {
    it("should be able to count recipient notifications", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({ recipientId: "RecipientId-1" }));
        await notificationsRepository.create(makeNotification({ recipientId: "RecipientId-1" }));
        await notificationsRepository.create(makeNotification({ recipientId: "RecipientId-example" }));

        const { count } = await countRecipientNotifications.execute({
            recipientId: "RecipientId-1",
        })

        expect(count).toEqual(2);
    })
})