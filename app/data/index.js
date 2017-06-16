import _ from 'lodash';
import * as appData from './appData'
import realm from './realm'
import populate from './dataGenerator'

class DataProvider {

  getUser(id = 1) {
    return _.find(appData.Users, {id});
  }

  getUsers() {
    return _.cloneDeep(appData.Users);
  }

  getNotifications() {
    let actions = _.cloneDeep(appData.Actions);
    for (let action of actions) {
      let user = _.find(appData.Users, {id: action.id});
      action.photo = user.photo;
      action.username = `${user.firstName} ${user.lastName}`
    }

    return actions;
  }

  getArticles() {
    return realm.objects('Article').filtered('type="article"');
  }

  getArticle(id) {
    return realm.objects('Article').filtered(`type="article" AND id=${id}`)[0];
  }

  getFacts() {
    let facts = _.cloneDeep(appData.Facts);
    for (let fact of facts) {
      let user = _.find(appData.Users, {id: fact.userId});
      fact.username = `${user.firstName} ${user.lastName}`;
    }

    return facts;
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