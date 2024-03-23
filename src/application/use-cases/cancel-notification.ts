import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationsNotFound } from './errors/notifications-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationsNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}
