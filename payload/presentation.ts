import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '뱀이 지켜보고 있어요: Python으로 Kubernetes 모니터링 하기',
      subTitle: '파이콘 한국 2021 발표 세션',
      at: '2021-10',
      descriptions: [
        {
          content: 'Python을 이용한 Kubernetes 모니터링 툴 개발 과정 소개',
        },
      ],
    },
    {
      title: '산 너머 산, 게임 기록 크롤링',
      subTitle: '파이콘 한국 2019 라이트닝 토크(2일차)',
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
