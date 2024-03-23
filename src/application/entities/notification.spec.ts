import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'valid-recipient-id',
      content: new Content('valid-content'),
      category: 'info',
    });

    expect(notification).toBeTruthy;
  });
});
