import realm from './realm'
import users from './users'
import articles from './articles'
import notifications from './notifications'


function truncate() {
  realm.write(() => {
    realm.delete(realm.objects('User'));
    realm.delete(realm.objects('Article'));
    realm.delete(realm.objects('Notification'));
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
    realm.write(() => {
      realm.create('Article', article)
    })
  }
}

function populateNotifications() {
  for (let notification of notifications) {
    let userId = notifications.indexOf(notification) % users.length;
    notification.user = realm.objects('Notification')[userId];
    realm.write(() => {
      realm.create('Notification', notification)
    })
  }
}

let populate = () => {
  truncate();

  populateUsers();
  populateArticles();
  populateNotifications();
};

export default populate
