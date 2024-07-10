import { SUCCESS_MESSAGE } from 'src/utils/messages';

const MessagesResponse = (key: string, lang: 'en' | 'in'): string => {
  switch (key) {
    case SUCCESS_MESSAGE.key:
      return SUCCESS_MESSAGE.message[lang];
    default:
      return 'success';
  }
};

export default MessagesResponse;
