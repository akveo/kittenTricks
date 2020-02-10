import { Message } from '../../chat-1/extra/data';

type MessageGroup = Message[];

export class ChatService {

  public createMessageGroups = (source: Message[]): MessageGroup[] => {
    if (!source.length) {
      return [];
    }

    const result: MessageGroup[] = [];
    const [firstMessage, ...messages] = source;

    let currentGroup: MessageGroup = [firstMessage];

    messages.forEach((message: Message): void => {
      if (this.fitsGroupSafe(message, currentGroup)) {
        currentGroup.push(message);
      } else {
        result.push(currentGroup);
        currentGroup = [message];
      }
    });

    return [...result, currentGroup];
  };

  private fitsGroupSafe = (message: Message, group: MessageGroup): boolean => {
    const [firstGroupMessage] = group;

    return this.isSameGroupSafe(firstGroupMessage, message);
  };

  private isSameGroup = (lhs: Message, rhs: Message): boolean => {
    return lhs.reply === rhs.reply;
  };

  private isSameGroupSafe = (lhs: Message, rhs: Message): boolean => {
    if (lhs && rhs) {
      return this.isSameGroup(lhs, rhs);
    }

    return false;
  };
}
