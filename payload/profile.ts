import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이상유',
    small: '',
  },
  contact: [
    {
      title: 'sangeu2000@gmail.com',
      link: 'mailto://sangeu2000@gmail.com',
      icon: faEnvelope,
    },
    {
      title:
        'Web에 공개되어 있는 이력서에는 휴대전화 번호를 기재하지 않았습니다. 메일로 연락 부탁드립니다.',
      icon: faPhone,
    },
    {
      title: 'https://github.com/import-shiburin',
      link: 'https://github.com/import-shiburin',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
