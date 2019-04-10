import { ChatMessageAlignment } from '@src/components/messaging';
import { Message as MessageModel } from '@src/core/model';

interface UiMessage {
  alignment: ChatMessageAlignment;
}

export type UiMessageModel = UiMessage & MessageModel;
