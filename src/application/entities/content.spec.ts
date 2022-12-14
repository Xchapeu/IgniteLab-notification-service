/* eslint-disable prettier/prettier */
import { Content } from "./content";

describe('Notification content', () => {
    it("should be able to create a notification content", () => {
        expect(() => new Content('New message for you!')).toBeTruthy();
    });
    
    it("should not be able to create a notification content with less than 5 characters", () => {
        expect(() => new Content('New')).toThrow();
    });
    
    it("should not be able to create a notification content with more than 240 characters", () => {
        expect(() => new Content('a'.repeat(245))).toThrow();
    });
})

