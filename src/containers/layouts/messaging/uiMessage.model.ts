import { Message as MessageModel } from '@src/core/model';
import { Alignments } from '@src/components/messaging/messageAlignment.type';

interface UiMessage {
  alignment: Alignments;
}

export type UiMessageModel = UiMessage & MessageModel;
