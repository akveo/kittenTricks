import { ImageRequireSource } from 'react-native';

export class Message {

  constructor(readonly text: string,
              readonly date: string | null,
              readonly reply: boolean,
              readonly attachment: MessageAttachment | null) {
  }

  static howAreYou(): Message {
    return new Message(
      'Hello! How are you',
      '4:00 PM',
      false,
      null,
    );
  }

  static imFine(): Message {
    return new Message(
      'Hey! I’m fine. Thanks!  And you?',
      '4:15 PM',
      true,
      null,
    );
  }

  static imFineToo(): Message {
    return new Message(
      'I’m fine too! Thanks!',
      '4:19 PM',
      false,
      null,
    );
  }

  static walkingWithDog(): Message {
    return new Message(
      'I’m walking with my dog',
      '4:20 PM',
      false,
      null,
    );
  }

  static imageAttachment1(): Message {
    return new Message(
      null,
      '4:25 PM',
      false,
      MessageAttachment.petPhoto1(),
    );
  }

  static imageAttachment2(): Message {
    return new Message(
      null,
      '4:28 PM',
      false,
      MessageAttachment.petPhoto2(),
    );
  }

  static canIJoin(): Message {
    return new Message(
      'Oh! He’s  so sweet! Can I join you and walk together?',
      '4:30 PM',
      true,
      null,
    );
  }

  static sure(): Message {
    return new Message(
      'Yes, sure!',
      '4:35 PM',
      false,
      null,
    );
  }
}

export class MessageAttachment {

  constructor(readonly source: ImageRequireSource) {
  }

  static petPhoto1(): MessageAttachment {
    return new MessageAttachment(require('../assets/image-attachment-1.png'));
  }

  static petPhoto2(): MessageAttachment {
    return new MessageAttachment(require('../assets/image-attachment-2.jpg'));
  }
}

