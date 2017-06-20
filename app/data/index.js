import _ from 'lodash';
import * as appData from './appData'
import realm from './realm'
import populate from './dataGenerator'

class DataProvider {

  getUser(id = 1) {
    return realm.objects('User').filtered(`id=${id}`)[0];
  }

  getUsers() {
    return _.cloneDeep(appData.Users);
  }

  getNotifications() {
    return realm.objects('Notification');
  }

  getArticles(type='article') {
    return realm.objects('Article').filtered(`type="${type}"`);
  }

  getArticle(id) {
    return realm.objects('Article').filtered(`id=${id}`)[0];
  }

  getPosts() {
    let posts = _.cloneDeep(appData.Posts);
    for (let post of posts) {
      let user = _.find(appData.Users, {id: post.userId});
      post.avatar = user.photo;
      post.username = `${user.firstName} ${user.lastName}`;
    }
    return posts;
  }

  getConversation(userId) {
    return _.cloneDeep(appData.Conversations);
  }

  getChatList() {
    let chats = [];
    let users = _.cloneDeep(appData.Users);
    for (let user of users) {
      let chat = {
        user,
        lastMsg: 'As for me, I\'m doing well. Nothing new really happened here. Except, ' +
        'Marta and Richard decided to get married next month.',
        date: -(273 * users.indexOf(user))
      };
      chats.push(chat);
    }

    return chats;
  }

  getComments(postId) {
    let comments = _.cloneDeep(appData.Comments);

    for (let comment of comments) {
      comment.user = this.getUser(comment.userId);
    }

    return _.sortBy(comments, ['time']);
  }

  getCards() {
    return _.cloneDeep(appData.Cards);
  }

  populateRealm() {
    populate();
  }
}

export let data = new DataProvider();