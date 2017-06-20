import Realm from 'realm';

class User extends Realm.Object {
}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    phone: {type: 'string'},
    country: {type: 'string'},
    email: {type: 'string'},
    password: {type: 'string'},
    newPassword: {type: 'string'},
    confirmPassword: {type: 'string'},
    photo: {type: 'int'},
    postCount: {type: 'int'},
    followersCount: {type: 'int'},
    followingCount: {type: 'int'},
    images: {type: 'list', objectType: 'Photo'}
  }
};

class Article extends Realm.Object {
}
Article.schema = {
  name: 'Article',
  primaryKey: 'id',
  properties: {
    id: 'int',
    header: {type: 'string', optional: true},
    text: {type: 'string', optional: true},
    photo: {type: 'int', optional: true},
    time: 'int',
    type: 'string',
    user: {type: 'User', optional: true},
    comments: {type: 'list', objectType: 'Comment'}
  }
};

class Comment extends Realm.Object {
}
Comment.schema = {
  name: 'Comment',
  primaryKey: 'id',
  properties: {
    id: 'int',
    text: 'string',
    time: 'int',
    user: 'User',
  }
};

class Notification extends Realm.Object {
}
Notification.schema = {
  name: 'Notification',
  primaryKey: 'id',
  properties: {
    id: 'int',
    description: 'string',
    time: 'int',
    attach: {type: 'int', optional: true},
    user: 'User',

  }
};

class Photo extends Realm.Object {
}
Photo.schema = {
  name: 'Photo',
  properties: {
    id: 'int'
  }
};


export default new Realm({schema: [User, Article, Comment, Photo, Notification]})