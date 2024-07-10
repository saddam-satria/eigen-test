import MessagesResponse from 'src/common/MessageProperties';

class AbstractService {
  getMessage(key: string, lang: 'en' | 'in') {
    return MessagesResponse(key, lang);
  }
}

export default AbstractService;
