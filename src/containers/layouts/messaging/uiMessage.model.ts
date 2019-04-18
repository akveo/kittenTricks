import { Message as MessageModel } from '@src/core/model';
import { Alignments } from '@src/components/messaging';

interface UiMessage {
  alignment: Alignments;
}

export type UiMessageModel = UiMessage & MessageModel;
