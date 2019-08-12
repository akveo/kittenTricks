import { Book } from '@src/core/model';
import { imageBook } from '@src/assets/images';

export const book1: Book = {
  name: 'Design Systems',
  author: 'Alla Kholmatova',
  categories: ['Design', 'Art'],
  rating: 4,
  price: 10,
  currency: '$',
  preview: imageBook,
  description: 'Not all design systems are equally effective. Some can generate coherent user experiences, ' +
    'others produce confusing patchwork designs. Some inspire teams to contribute to them, while others are ' +
    'neglected. ' +
    'Some get better with time, more cohesive and better functioning; others get worse, ' +
    'becoming bloated and cumbersome.\n' + '\n' +
    'Throughout this book, Alla Kholmatova, previously a lead designer at FutureLearn, will share an approach ' +
    'and the ' +
    'key qualities of effective, enduring design systems. It’s based on Alla’s experiences, case-studies from ' +
    'AirBnB, ' +
    'Atlassian, Eurostar, TED, and Sipgate, plus 18 months of research and interviews — all attempting to figure out ' +
    'what works and what doesn’t work in real-life products. It may not answer every question, but it will help you ' +
    'figure out just the right strategy for establishing and evolving a design system in your organization.',
};
