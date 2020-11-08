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
      title: '010-3645-4293',
      icon: faPhone,
    },
    {
      title: 'https://github.com/sangeu2000',
      link: 'https://github.com/sangeu2000',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
