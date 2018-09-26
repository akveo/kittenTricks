export const Conversations = [
  {
    withUserId: 1,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hey, how’ve you been?',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Yeah, not bad, actually I finally got a call back from that job that I interviewed for, and guess what? I got it!',
      },
      {
        id: 2,
        time: -230,
        type: 'out',
        text: 'Awesome! Yeah, well done, that’s really great to hear. Do you start right away?',
      },
      {
        id: 3,
        time: -100,
        type: 'out',
        text: 'Well, uhm yes and no, I go in for training tomorrow, but I don’t really start until next week. ' +
        'Do you have some time this weekend, maybe we could get together?',
      },
      {
        id: 4,
        time: -45,
        type: 'in',
        text: 'I’ve got a lot planned this weekend, just running around, doing loads of stuff, but Friday’s pretty open.',
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'That works pretty well for me!',
      }],
  },
  {
    withUserId: 5,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'I have no idea what to buy for Mary for her birthday.',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Me, neither! Would you like to go in and buy her a gift together?',
      },
      {
        id: 2,
        time: -100,
        type: 'out',
        text: 'If I remember right, she likes music, skiing, and reading',
      },
      {
        id: 3,
        time: -45,
        type: 'out',
        text: 'You know, maybe we could get her some concert tickets. Who would know her favorite groups?',
      },
      {
        id: 4,
        time: -25,
        type: 'in',
        text: 'Her roommate, Malia, might know what her favorite groups are.',
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'Cool! Let\'s give Malia a call and ask her for her help right now',
      }],
  },
];

export default Conversations;
