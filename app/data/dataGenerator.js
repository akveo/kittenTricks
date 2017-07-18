import realm from './realm/realm'
import users from './raw/users'
import articles from './raw/articles'
import notifications from './raw/notifications'
import conversations from './raw/conversations'
import cards from './raw/cards'


function truncate() {
  realm.write(() => {
    realm.delete(realm.objects('User'));
    realm.delete(realm.objects('Article'));
    realm.delete(realm.objects('Notification'));
    realm.delete(realm.objects('Conversation'));
    realm.delete(realm.objects('Comment'));
    realm.delete(realm.objects('Message'));
    realm.delete(realm.objects('Card'));
    realm.delete(realm.objects('Version'));
  });
}

function populateUsers() {
  for (let user of users) {
    let images = user.images;
    user.images = [];
    realm.write(() => {
      let created = realm.create('User', user);
      for (let i of images)
        created.images.push({id: i});
    });
  }
}

function populateArticles() {
  for (let article of articles) {
    let userId = articles.indexOf(article) % users.length;
    article.user = realm.objects('User')[userId];

    let comments = [];
    for (let comment of article.comments) {
      let userId = article.comments.indexOf(comment) % users.length;
      comment.user = realm.objects('User')[userId];
      realm.write(() => {
        comments.push(realm.create('Comment', comment))
      })
    }
    article.comments = comments;
    realm.write(() => {
      realm.create('Article', article)
    })
  }
}

function populateNotifications() {
  for (let notification of notifications) {
    let userId = notifications.indexOf(notification) % users.length;
    notification.user = realm.objects('User')[userId];
    realm.write(() => {
      realm.create('Notification', notification)
    })
  }
}

function populateConversations() {
  for (let conversation of conversations) {
    let messages = [];

    for (let message of conversation.messages) {
      realm.write(() => {
        messages.push(realm.create('Message', message));
      })
    }

    conversation.messages = messages;
    conversation.withUser = realm.objects('User')
      .filtered(`id="${conversation.withUserId}"`)[0];
    realm.write(() => {
      realm.create('Conversation', conversation)
    })
  }
}

function populateCards() {
  for (let card of cards) {
    realm.write(() => {
      realm.create('Card', card)
    })
  }
}

function populateVersion() {
  realm.write(() => {
    realm.create('Version', {id: 0})
  })
}

let populate = () => {
  let version = realm.objects('Version');
  if (version && version.length > 0)
    return;

  //truncate();
  populateVersion();
  populateUsers();
  populateArticles();
  populateNotifications();
  populateConversations();
  populateCards();
};

export default populate
