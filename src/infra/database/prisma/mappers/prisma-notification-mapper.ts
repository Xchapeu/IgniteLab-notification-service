/* eslint-disable prettier/prettier */
import { Notification as RawNotification } from '@prisma/client';
import { Notification } from "@application/entities/notification";
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            recipientId: notification.recipientId,
            category: notification.category,
            content: notification.content.value,
            readAt: notification.readAt,
            canceledAt: notification.canceledAt,
            createdAt: notification.createdAt
        }
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification({
            recipientId: raw.recipientId,
            category: raw.category,
            content: new Content(raw.content),
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt
        }, raw.id );
    }
}