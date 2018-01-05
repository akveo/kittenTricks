import users from './raw/users'
import articles from './raw/articles'
import notifications from './raw/notifications'
import conversations from './raw/conversations'
import _ from 'lodash'

function populateArticles() {
  for (let article of articles) {
    let userId = articles.indexOf(article) % users.length;
    article.user = _.find(users, x => x.id == userId) || users[0];
    for (let comment of article.comments) {
      let userId = article.comments.indexOf(comment) % users.length;
      comment.user = _.find(users, x => x.id == userId) || users[0];
    }
  }
}

function populateNotifications() {
  for (let notification of notifications) {
    let userId = notifications.indexOf(notification) % users.length;
    notification.user = _.find(users, x => x.id == userId) || users[0];
  }
}

function populateConversations() {
  for (let conversation of conversations) {
    conversation.withUser = _.find(users, x => x.id == conversation.withUserId) || users[0];
  }
}

let populate = () => {
  populateArticles();
  populateNotifications();
  populateConversations();
};

export default populate
