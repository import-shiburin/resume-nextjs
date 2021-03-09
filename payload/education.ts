import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '광주과학기술원',
      subTitle: '전기전자컴퓨터공학부 학사과정 재학(휴학 중)\n',
      descriptions: [
        {
          content:
            '자료구조, 알고리즘, 컴퓨터 구조, 데이터베이스, 컴퓨터 네트워크, 소프트웨어 공학 과목을 수강했습니다.',
        },
      ],
      startedAt: '2019-03',
      // endedAt: '2010-02',
    },
    {
      title: '용문고등학교(서울)',
      subTitle: '졸업',
      startedAt: '2016-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
