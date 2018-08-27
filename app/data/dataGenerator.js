import _ from 'lodash';
import users from './raw/users';
import articles from './raw/articles';
import notifications from './raw/notifications';
import conversations from './raw/conversations';

function populateArticles() {
  articles.forEach(article => {
    const articleUserId = articles.indexOf(article) % users.length;
    article.user = _.find(users, x => x.id === articleUserId) || users[0];
    article.comments.forEach(comment => {
      const commentUserId = article.comments.indexOf(comment) % users.length;
      comment.user = _.find(users, x => x.id === commentUserId) || users[0];
    });
  });
}

function populateNotifications() {
  notifications.forEach(notification => {
    const userId = notifications.indexOf(notification) % users.length;
    notification.user = _.find(users, x => x.id === userId) || users[0];
  });
}

function populateConversations() {
  conversations.forEach(conversation => {
    conversation.withUser = _.find(users, x => x.id === conversation.withUserId) || users[0];
  });
}

const populate = () => {
  populateArticles();
  populateNotifications();
  populateConversations();
};

export default populate;
