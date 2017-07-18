import {Article, Card, Comment, Conversation, Message, Notification, Photo, User, Version} from './schemas';
import notifications from '../raw/notifications';

export default [
  {
    schema: [User, Article, Comment, Photo, Version, Notification, Message, Card, Conversation],
    schemaVersion: 1,
    migration(oldRealm, newRealm) {
      const newObjects = newRealm.objects('Notification');

      for (let i = 0; i < newObjects.length; i++) {
        newObjects[i].type = notifications[i].type;
      }
    }
  }
];