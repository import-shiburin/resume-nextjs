import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '내 손끝에서 무언가가 만들어지고, 이것이 다른 사람에게 도움이 되는 것이 너무나도 보람찬 개발자입니다.',
    '- Python과 Flask, MySQL를 주로 사용',
    '- Django, PostgreSQL, Redis 사용 경험',
    '- Git 사용(Task별 branch 분기를 통한 관리, 간단한 hook 작성)',
    '- Docker와 Docker-Compose를 이용한 서비스 배포 경험',
    '- AWS 등 클라우드 환경, Xenserver을 사용한 온프레미스 하이퍼바이저 환경 경험',
    '- Site-to-Site VPN 설정, DHCP Option 121을 사용한 Multiple-Gateway Route 설정 경험',
    "서비스 운영에 필요한 전반적인 지식을 얻기 위해 '직접 해보며 알아가는' 방법을 가장 좋아합니다.",
    '산업기능요원 현역 신규 편입을 희망합니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
