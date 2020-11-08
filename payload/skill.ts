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
      title: 'Amazon Web Services',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
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
  skills: [backend, database, frontend, etc],
  tooltip:
    '1: 기초 수준, 2: 인터넷의 튜토리얼들을 참고하여 개발하는 수준, 3: 공식 문서를 참조하거나 코드를 직접 분석해 문제를 해결해보고자 하는 수준',
};

export default skill;
