import { Product } from '@src/core/model';

export const products: Product[] = [
  {
    name: 'White Chair',
    type: 'Furniture',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: 'https://images-na.ssl-images-amazon.com/images/I/31-3e0Ug1gL._SX425_.jpg',
    description: 'The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'H:80cm  W:50cm  D:40cm',
  },
  {
    name: 'Pink Chair',
    type: 'Furniture',
    colors: ['pink', 'blue'],
    cost: 130,
    currency: '$',
    photo: 'https://www.pbteen.com/ptimgs/rk/images/dp/wcm/201849/0281/round-about-chair-c.jpg',
    description: 'The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'H:80cm  W:50cm  D:40cm',
  },
  {
    name: 'Black Lamp',
    type: 'Lighting',
    colors: ['black'],
    cost: 80,
    currency: '$',
    photo: 'https://www.lightingcompany.co.uk/images/ray-contemporary-black-table-lamp-p13435-18473_image.jpg',
    description: 'The Vitra Plastic Side Lamps are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'medium',
  },
  {
    name: 'Yellow Lamp',
    type: 'Lighting',
    colors: ['yellow'],
    cost: 100,
    currency: '$',
    photo: 'https://secure.img2-fg.wfcdn.com/im/83851855/resize-h310-w310%5Ecompr-r85/2793/27938526/' +
      'sven-55cm-table-lamp.jpg',
    description: 'The Vitra Plastic Side Lamps are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a plastic shell and wooden frame has since become a source of inspiration for ' +
      'many designers.',
    size: 'small',
  },
  {
    name: 'Mug',
    type: 'Cookware',
    colors: ['blue', 'red', 'tomato'],
    cost: 10,
    currency: '$',
    photo: 'http://editions.centrepompidou.fr/uploads/photos/743/608_xl.jpg',
    description: 'The Vitra Glass Side Cookware are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a glass shell has since become a source of inspiration for many designers.',
    size: 'big',
  },
  {
    name: 'Plate',
    type: 'Cookware',
    colors: ['blue', 'red', 'tomato'],
    cost: 10,
    currency: '$',
    photo: 'http://www.redfoxpartytraralgon.com.au/wp-content/uploads/2015/02/381107.jpg',
    description: 'The Vitra Glass Side Cookware are undoubtedly an absolute classic when it comes to the living area.' +
      'The unusual mix of a glass shell has since become a source of inspiration for many designers.',
    size: 'big',
  },
];
