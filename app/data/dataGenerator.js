import realm from './realm'
import users from './users'
import articles from './articles'


function truncate() {
  realm.write(() => {
    realm.delete(realm.objects('User'));
    realm.delete(realm.objects('Article'));
  });
}

function populateUsers() {
  for (let user of users) {
    realm.write(() => {
      realm.create('User', user)
    })
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


let populate = () => {
  truncate();

  populateUsers();
  populateArticles();

};

export default populate
