import _ from 'lodash';
import * as appData from './appData'

class DataProvider {

  getUser(id = 1) {
    return _.find(appData.Users, {id});
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

  getPosts(){
    let posts = _.cloneDeep(appData.Posts);
    for (let post of posts) {
      let user = _.find(appData.Users, {id: post.userId});
      post.avatar = user.photo;
      post.username = `${user.firstName} ${user.lastName}`;
      post.title = post.text.split('.')[0]
    }
    return posts;
  }

  getConversation(userId){
    return _.cloneDeep(appData.Conversations);
  }
}

export let Data = new DataProvider();