const articles = [{
  'id': 1,
  'photo': require('../img/photo1.png'),
  'type': 'article',
  'time': -300,
  'header': 'Plants Of Our Nature',
  'text': 'Ferns are a very old group of plants. They first appeared on Earth in the middle Devonian Era about 360 million years ago, just before the Carboniferous Era. Most of the modern fern families we see today first appeared in the Late Cretaceous about 45 or 50 million years ago – during the age of the dinosaurs!',
  'comments': [{
    'id': 1,
    'text': 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    'time': 0
  }, {
    'id': 2,
    'text': 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    'time': -311
  }, {
    'id': 3,
    'text': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    'time': -622
  }, {
    'id': 4,
    'text': 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    'time': -933
  }, {
    'id': 5,
    'text': 'In hac habitasse platea dictumst.',
    'time': -1244
  }, {
    'id': 6,
    'text': 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    'time': -1555
  }, {
    'id': 7,
    'text': 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    'time': -1866
  }, {
    'id': 8,
    'text': 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    'time': -2177
  }]
}, {
  'id': 2,
  'photo': require('../img/photo2.png'),
  'type': 'article',
  'time': -1373,
  'header': 'Balloon Trip',
  'text': 'Mostly it’s about hot air - for without that balloons are just big empty bags with baskets on the bottom. ' +
  'The Montgolfier brothers had great hopes when they made the first manned flight. ' +
  'They thought balloons would take off as an available means of commercial flight. ' +
  'Instead, they have remained the province of sport, adventure and enjoyment. ' +
  'Modern balloons are a lot more sophisticated than their ancestors, ' +
  'but they still retain the essential characteristics which makes them so attractive. ' +
  'A plane is claustrophobic and very noisy. Balloons are so gentle and majestic and silent when the burner’s not working.',
  'comments': []
}, {
  'id': 3,
  'photo': require('../img/photo3.png'),
  'type': 'article',
  'time': -2446,
  'header': 'Sea World',
  'text': 'The worlds oceans cover two thirds of our planet. As we take a dive from the rocks or paddle out from the beach, we are entering a place which is teeming with marine life. ' +
  'From fish to crabs to octopuses or even sea creatures that have not yet been discovered, the oceans and its coastlines are an amazing and interesting foray of water wildlife.',
  'comments': []
}, {
  'id': 4,
  'photo': require('../img/photo4.png'),
  'type': 'article',
  'time': -3519,
  'header': 'Flowers',
  'text': 'Flowers did not always exist; they first appeared 140 million years ago. Before that, ferns and cone bearing trees dominated the earth. ' +
  'Several centuries ago in Holland, tulips were more valuable than gold. ' +
  'Broccoli is actually a flower. Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.',
  'comments': []
}, {
  'id': 5,
  'photo': require('../img/photo5.png'),
  'type': 'article',
  'time': -4592,
  'header': 'Birds Of Our Planet',
  'text': 'Birds have feathers, wings, lay eggs and are warm blooded. There are around 10000 different species of birds worldwide. ' +
  'The Ostrich is the largest bird in the world. It also lays the largest eggs and has the fastest maximum running speed (97 kph). ' +
  'Scientists believe that birds evolved from theropod dinosaurs. Birds have hollow bones which help them fly. ' +
  'Some bird species are intelligent enough to create and use tools.',
  'comments': []
}, {
  'id': 6,
  'photo': require('../img/photo6.png'),
  'type': 'article',
  'time': -5665,
  'header': 'Mountains',
  'text': 'Mountains make up about one-fifth of the world\'s landscape, and provide homes to at least one-tenth of the world\'s people. ' +
  'The tallest known mountain in the solar system is Olympus Mons, located on Mars. ' +
  'There are mountains under the surface of the sea! ' +
  'Mountains occur more often in oceans than on land; some islands are the peaks of mountains coming out of the water.',
  'comments': []
}, {
  'id': 7,
  'photo': require('../img/photo45.png'),
  'type': 'fact',
  'time': -5665,
  'header': 'Smile and Frown',
  'text': 'It takes 17 muscles to smile and 43 to frown.',
  'comments': []
}, {
  'id': 8,
  'photo': require('../img/photo46.png'),
  'type': 'fact',
  'time': -8373,
  'header': 'Interesting Fact',
  'text': 'Dolphins sleep with one eye open.',
  'comments': []
}, {
  'id': 9,
  'photo': require('../img/photo47.png'),
  'type': 'fact',
  'time': -565,
  'header': 'Elephant',
  'text': 'Elephant is one of the few mammals that can\'t jump.',
  'comments': []
}, {
  'id': 10,
  'photo': require('../img/photo48.png'),
  'type': 'fact',
  'time': -52365,
  'header': 'Cold Water',
  'text': 'Cold water weighs less than hot water.',
  'comments': []
}, {
  'id': 11,
  'photo': require('../img/photo49.png'),
  'type': 'fact',
  'time': -1295,
  'header': 'Our Eyes',
  'text': 'You blink over 10,000,000 times a year.',
  'comments': []
}, {
  'id': 12,
  'photo': require('../img/photo17.png'),
  'type': 'post',
  'time': -300,
  'title': 'My Little Kitten',
  'text': 'I have got a cat. Her name is Matilda. She is quite old for a cat. She is eleven years old. Matilda is very' +
  ' fluffy. Her back is black and her belly and chest are white. She also has a black muzzle with long white whiskers. ' +
  'Her legs and paws are white. Matilda has big eyes. Her eyes are light green, but they become yellow in bright sunlight. I love my cat.',
  'comments': []
}, {
  'id': 13,
  'photo': require('../img/photo18.png'),
  'type': 'post',
  'time': -1373,
  'header': 'Interesting Fact',
  'text': 'One chef prepared a delicious cake with apples and named it in honor of his beloved Charlotte.',
  'comments': []
}, {
  'id': 14,
  'photo': require('../img/photo19.png'),
  'type': 'post',
  'time': -2446,
  'header': 'Music In Our Life',
  'text': 'The scientists say that they can define your character if they know what music you like.',
  'comments': []
}, {
  'id': 15,
  'photo': require('../img/photo20.png'),
  'type': 'post',
  'time': -3519,
  'header': 'Exciting Adventure',
  'text': 'My trip to Spain last summer. I think that it was the most interesting trip in my life.',
  'comments': []
},
];

export default articles;