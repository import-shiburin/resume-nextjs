import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '산 너머 산, 게임 기록 크롤링',
      subTitle: '2019 파이콘 한국 라이트닝 토크(2일차)',
      at: '2019-08',
      descriptions: [
        {
          content: 'Python을 사용한 Jubeat Tools 크롤러 구조 소개',
        },
        {
          content: 'Youtube:',
          postHref: 'https://www.youtube.com/watch?v=irkRUczhie8',
        },
      ],
    },
  ],
};

export default presentation;
