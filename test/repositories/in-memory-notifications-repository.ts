/* eslint-disable prettier/prettier */
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    
    async create(notification: Notification) {
        this.notifications.push(notification);
    }

    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }

    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}