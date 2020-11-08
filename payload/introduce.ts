import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '내 손끝에서 무언가가 만들어지고, 이것이 다른 사람에게 도움이 되는 것이 너무나도 보람찬 개발자입니다.',
    "Python과 Flask, MySQL를 주로 사용하며, Django, PostgreSQL, Redis 사용 경험을 가지고 있습니다. VCS로 Git를 사용하며, Docker와 Docker-Compose를 이용한 서비스 배포 경험이 있습니다. AWS 등 클라우드 환경뿐 아니라, Xenserver을 사용한 온프레미스 하이퍼바이저 환경, Site-to-Site VPN 설정 등 서비스 운영에 필요한 전반적인 지식을 얻기 위해 '직접 해보는' 방법을 가장 좋아합니다.",
    '향후 백엔드 혹은 DevOps 개발자로서, 세상의 한 편린이나마 지탱하는 데에 제가 기여할 수 있었으면 좋겠다는 목표를 가지고 있습니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
