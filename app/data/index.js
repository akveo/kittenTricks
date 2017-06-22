import _ from 'lodash';
import * as appData from './appData'
import realm from './realm'
import populate from './dataGenerator'

class DataProvider {

  getUser(id = 1) {
    return realm.objects('User').filtered(`id=${id}`)[0];
  }

  getUsers() {
    return realm.objects('User');
  }

  getNotifications() {
    return realm.objects('Notification');
  }

  getArticles(type = 'article') {
    return realm.objects('Article').filtered(`type="${type}"`);
  }

  getArticle(id) {
    return realm.objects('Article').filtered(`id=${id}`)[0];
  }


  getConversation(userId = 1) {
    let asd = realm.objects('Conversation');
    return realm.objects('Conversation').filtered(`withUser.id=${userId}`)[0];
  }

  getChatList() {
    return realm.objects('Conversation');
  }

  getComments(postId = 1) {
    return this.getArticle(postId).comments;
  }

  getCards() {
    return _.cloneDeep(appData.Cards);
  }

  populateRealm() {
    populate();
  }
}

export let data = new DataProvider();