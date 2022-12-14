/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            recipientId: 'recipient-id-example',
            content: new Content('Nova mensagem!'),
            category: 'social',
        })
        expect(notification).toBeTruthy();
    })
})