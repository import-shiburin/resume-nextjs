import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'DEVSISTERS',
      position: 'DevOps Engineer',
      startedAt: '2021-02',
      descriptions: [],
      skillKeywords: [
        'Docker',
        'Kubernetes',
        'Terraform',
        'Amazon web services',
        'Golang',
        'ArgoCD',
        'Istio',
      ],
    },
    {
      title: 'GIST 계산시스템생물학 연구실',
      position: '백엔드 개발자(학부 인턴, 위촉연구원)',
      startedAt: '2019-07',
      descriptions: [
        'AI기반 신약개발 플랫폼 데이터 수합/정규화 시스템 유지보수',
        'Bulk 입력 API 개발',
      ],
      skillKeywords: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Ubuntu'],
    },
  ],
};

export default experience;
