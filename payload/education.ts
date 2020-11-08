import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '광주과학기술원',
      subTitle: '전기전자컴퓨터공학부 학사과정 재학',
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
