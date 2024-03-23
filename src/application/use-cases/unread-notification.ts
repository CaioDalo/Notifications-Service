import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationsNotFound } from './errors/notifications-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationsNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
