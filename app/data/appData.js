


export const Actions = [{
  id: 10,
  action: 'follow',
  description: 'liked profile page for Dribbble App Design Concept',
  time: -1
}, {
  id: 9,
  action: 'like',
  description: 'liked a photo on your album',
  time: -271,
  attach: require('../data/img/Image 8.png'),
}, {
  id: 2,
  action: 'like',
  description: 'liked a photo on your album',
  time: -541,
  attach: require('../data/img/Image 8.png'),
}, {
  id: 5,
  action: 'like',
  description: 'liked profile page for Dribbble App Design Concept',
  time: -811
}, {
  id: 3,
  action: 'like',
  description: 'liked profile page for Dribbble App Design Concept',
  time: -1081
}, {
  id: 2,
  action: 'follow',
  description: 'followed you UI/UX Designer and Interaction Designer',
  time: -1351
}, {
  id: 9,
  action: 'follow',
  description: 'liked a photo on your album',
  time: -1621,
  attach: require('../data/img/Image 8.png'),
}, {
  id: 7,
  action: 'follow',
  description: 'followed you iOS Developer and Graphic Designer',
  time: -1891
}, {
  id: 1,
  action: 'follow',
  description: 'liked profile page for Dribbble App Design Concept',
  time: -2161
}, {
  id: 3,
  action: 'like',
  description: 'liked a photo on your album',
  time: -2431,
  attach: require('../data/img/Image 8.png'),
}];

export const Articles =
  [{
    'id': 1,
    'photo': require('../data/img/photo1.png'),
    'time': -300,
    'header': 'Plants Of Our Nature'
  }, {
    'id': 2,
    'photo': require('../data/img/photo2.png'),
    'time': -1373,
    'header': 'Balloon Trip'
  }, {
    'id': 3,
    'photo': require('../data/img/photo3.png'),
    'time': -2446,
    'header': 'Sea World'
  }, {
    'id': 4,
    'photo': require('../data/img/photo4.png'),
    'time': -3519,
    'header': 'Flowers'
  }, {
    'id': 5,
    'photo': require('../data/img/photo5.png'),
    'time': -4592,
    'header': 'Birds Of Our Planet'
  }, {
    'id': 6,
    'photo': require('../data/img/photo6.png'),
    'time': -5665,
    'header': 'Mountains'
  }];

export const Facts =
  [{
    'id': 1,
    'photo': require('../data/img/photo45.png'),
    'time': -300,
    'userId': 3,
    'title': 'Smile and Frown',
    'text': 'It takes 17 muscles to smile and 43 to frown.'
  }, {
    'id': 2,
    'photo': require('../data/img/photo46.png'),
    'time': -1373,
    'userId': 2,
    'title': 'Interesting Fact',
    'text': 'Dolphins sleep with one eye open.'
  }, {
    'id': 3,
    'photo': require('../data/img/photo47.png'),
    'time': -2446,
    'userId': 2,
    'title': 'Elephant',
    'text': 'Elephant is one of the few mammals that can\'t jump.'
  }, {
    'id': 4,
    'photo': require('../data/img/photo48.png'),
    'time': -3519,
    'userId': 8,
    'title': 'Cold Water',
    'text': 'Cold water weighs less than hot water.'
  }, {
    'id': 5,
    'photo': require('../data/img/photo49.png'),
    'userId': 5,
    'time': -4592,
    'title': 'Our Eyes',
    'text': 'You blink over 10,000,000 times a year.'
  }];

export const Posts =
  [{
    'id': 1,
    'userId': 3,
    'photo': require('../data/img/photo17.png'),
    'time': -300,
    'title': 'My Little Kitten',
    'text': 'I have got a cat. Her name is Matilda. She is quite old for a cat. She is eleven years old. Matilda is very' +
    ' fluffy. Her back is black and her belly and chest are white. She also has a black muzzle with long white whiskers. ' +
    'Her legs and paws are white. Matilda has big eyes. Her eyes are light green, but they become yellow in bright sunlight. I love my cat.'
  }, {
    'id': 2,
    'userId': 7,
    'photo': require('../data/img/photo18.png'),
    'time': -1373,
    'title': 'Interesting Fact',
    'text': 'One chef prepared a delicious cake with apples and named it in honor of his beloved Charlotte.'
  }, {
    'id': 3,
    'userId': 2,
    'photo': require('../data/img/photo19.png'),
    'time': -2446,
    'title': 'Music In Our Life',
    'text': 'The scientists say that they can define your character if they know what music you like.'
  }, {
    'id': 4,
    'userId': 4,
    'photo': require('../data/img/photo20.png'),
    'time': -3519,
    'title': 'Exciting Adventure',
    'text': 'My trip to Spain last summer. I think that it was the most interesting trip in my life.'
  }];

export const Conversations = [
  {
    id: 0,
    type: 'out',
    date: -300,
    text: 'When using Chrome debugging, it runs all the JavaScript code within Chrome itself and communicates with native code via WebSocket. So you are using V8.'
  },
  {
    id: 1,
    date: -240,
    type: 'in',
    text: 'When using React Native, you\'re going to be running your JavaScript code in two environments:'
  },
  {
    id: 2,
    date: -100,
    type: 'out',
    text: 'Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters.'
  },
  {
    id: 3,
    date: -45,
    type: 'in',
    text: 'Here\'s a full list of React Native\'s enabled transformations.'
  }
];

export const Comments = [
  {
    'id': 1,
    'userId': 11,
    'message': 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    'time': 0
  }, {
    'id': 2,
    'userId': 11,
    'message': 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    'time': -311
  }, {
    'id': 3,
    'userId': 9,
    'message': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    'time': -622
  }, {
    'id': 4,
    'userId': 7,
    'message': 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    'time': -933
  }, {
    'id': 5,
    'userId': 10,
    'message': 'In hac habitasse platea dictumst.',
    'time': -1244
  }, {
    'id': 6,
    'userId': 5,
    'message': 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    'time': -1555
  }, {
    'id': 7,
    'userId': 3,
    'message': 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    'time': -1866
  }, {
    'id': 8,
    'userId': 2,
    'message': 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    'time': -2177
  }];


export const Cards =
  [{
    'id': 1,
    'name': 'Cindee Seton',
    'bank': 'CitiBank',
    'amount': 440,
    'date': '07/19',
    'cardNo': '3538********8699',
    'type': 'visa',
    'currency': 'usd'
  }, {
    'id': 2,
    'name': 'Cindee Seton',
    'bank': 'CitiBank',
    'amount': 1740,
    'date': '07/19',
    'cardNo': '5602********1161',
    'type': 'mastercard',
    'currency': 'eur'
  }, {
    'id': 3,
    'name': 'Cindee Seton',
    'bank': 'CitiBank',
    'amount': 2120,
    'date': '09/24',
    'cardNo': '3379********5427',
    'type': 'axp',
    'currency': 'usd'
  }, {
    'id': 4,
    'name': 'Cindee Seton',
    'bank': 'CitiBank',
    'amount': 3150,
    'date': '02/21',
    'cardNo': '4911********8396',
    'type': 'visa',
    'currency': 'eur'
  }];
