import {
  NOT_FOUND_MESSAGE,
  SUCCESS_MESSAGE,
  UNKNOWN_ERROR_MESSAGE,
} from 'src/utils/messages';

const MessagesResponse = (key: string, lang: 'en' | 'in'): string => {
  switch (key) {
    case SUCCESS_MESSAGE.key:
      return SUCCESS_MESSAGE.message[lang];
    case NOT_FOUND_MESSAGE.key:
      return NOT_FOUND_MESSAGE.message[lang];
    case UNKNOWN_ERROR_MESSAGE.key:
      return UNKNOWN_ERROR_MESSAGE.message[lang];
    default:
      return 'success';
  }
};

export default MessagesResponse;
