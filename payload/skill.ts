import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Python(Flask)',
      level: 3,
    },
    {
      title: 'Python(Django)',
      level: 3,
    },
    {
      title: 'Golang',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Amazon Web Services',
      level: 2,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 2,
    },
    {
      title: 'Istio',
      level: 2,
    },
    {
      title: 'ArgoCD',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'CockroachDB',
      level: 1,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'Javascript',
      level: 1,
    },
    {
      title: 'HTML',
      level: 1,
    },
    {
      title: 'CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Xenserver(XCP-NG)',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, database, frontend, etc],
  tooltip:
    '1: 기초 수준, 2: 인터넷 튜토리얼나 공식 문서 등을 참고해 문제를 해결하는 수준, 3: 직접 코드 분석을 통해 문제 해결을 시도하는 수준',
};

export default skill;
