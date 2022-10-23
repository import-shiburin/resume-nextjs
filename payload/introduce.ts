import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '내 손끝에서 무언가가 만들어지고, 이를 통해 다른 사람을 지탱할 수 있기를 바라는 개발자입니다.',
    '- 주 사용 언어: Python',
    '- Kubernetes를 이용한 Cloud-Native 컴퓨팅 환경 경험',
    '- Terraform을 이용한 IaC 경험',
    '- Cloud(AWS) & On-premise(Xenserver) 환경 경험',
    "서비스 운영에 필요한 전반적인 지식을 얻기 위해 '직접 해보며 알아가는' 방법을 가장 선호합니다.",
    '',
    '산업기능요원 현역 신규 편입을 희망합니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
