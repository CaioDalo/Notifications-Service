export class NotificationsNotFound extends Error {
  constructor() {
    super('Notification not found');
  }
}
