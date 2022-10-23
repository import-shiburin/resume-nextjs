import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '사내방송 스트리밍 서비스 개발',
      startedAt: '2021-09',
      endedAt: '2022-02',
      where: 'DEVSISTERS',
      descriptions: [
        {
          content:
            'Vimeo를 대체하는 HLS(AWS MediaLive & MediaStore) 기반 사내방송 스트리밍 서비스 개발',
          descriptions: [
            {
              content: 'CloudFront와 로컬 캐시 서버를 함께 사용해 대역폭 이슈 해결',
            },
          ],
        },
      ],
    },
    {
      title: '저 대역폭 환경의 리소스 다운로드 실패 이슈 대응',
      startedAt: '2021-09',
      endedAt: '2021-10',
      where: 'DEVSISTERS',
      descriptions: [
        {
          content:
            '저 대역폭의 네트워크를 사용하는 유저가 게임 업데이트 중 리소스 다운로드를 실패하는 문제 로그 베이스 분석 및 대응',
        },
      ],
    },
    {
      title: "Let's Encrypt DST Root CA 만료 이슈 대응",
      startedAt: '2021-06',
      endedAt: '2021-10',
      where: 'DEVSISTERS',
      descriptions: [
        {
          content:
            "2021년 10월 말 DST Root CA가 만료됨에 따라 발생하는 구형 디바이스에서의 Let's Encrypt 인증서 신뢰 문제 파악 및 대응",
        },
      ],
    },
    {
      title: 'VaultSecretMap Operator',
      startedAt: '2021-04',
      endedAt: '2021-06',
      where: 'DEVSISTERS',
      descriptions: [
        {
          content:
            'Secret store인 Vault에 저장되어 있는 secret을 Kubernetes secret object로 매핑하는 VaultSecretMap Custom resource 정의와 Operator 개발',
        },
      ],
    },
    {
      title: 'Kubernetes Policy Checker',
      startedAt: '2021-02',
      endedAt: '2021-04',
      where: 'DEVSISTERS',
      descriptions: [
        {
          content:
            'Kubernetes의 리소스에 대해 정책을 만들고, 정책 검증에 실패한 리소스를 보고하는 프레임워크 개발',
        },
        {
          content:
            'kubectl의 사용 경험과 유사하도록, singular name/plural name/short names를 이용한 리소스 resolve가 가능하도록 개발',
        },
        {
          content: '유저가 프레임워크 코드를 수정하지 않고 정책 추가/삭제가 자유롭도록 설계',
        },
        {
          content: 'Fail-safe한 Slack interaction 구현',
          descriptions: [
            {
              content:
                '사용자가 특정 리소스에 대한 검사를 비활성화할 수 있는 Slack interaction 기능 제작',
            },
            {
              content: 'Slack interactor에 연결할 수 없더라도 정책 검사가 이루어지도록 서비스 분리',
            },
            {
              content:
                'Slack interactor에서 검사 비활성화 대상 리소스 목록을 받아오지 못하는 경우, 모든 리소스에 대해 검사하도록 Fallback 구현',
            },
          ],
        },
      ],
    },
    {
      title: 'AI기반 신약개발 플랫폼 데이터 수합/정규화 시스템',
      startedAt: '2019-07',
      where: 'GIST 계산시스템생물학 연구실',
      descriptions: [
        {
          content: '전체 코드베이스 리펙토링',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이전 개발된 코드의 경우 재사용 불가한 컴포넌트 설계와 많은 부분에서 하드코딩된 값으로 인해 유지보수에 어려움 존재',
            },
            {
              content:
                'Django Form을 상속받는 Form 클래스를 기반으로, 데이터 정규화 작업 및 별도 처리가 필요한 relation의 CRUD 작업을 Form의 메소드 콜을 사용해 처리하도록 재설계함',
            },
          ],
        },
        {
          content: 'Bulk 입력 API 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '다량의 데이터를 Excel 워크시트로 업로드하여 일괄 정규화 후 저장하는 API' },
            {
              content:
                '외부 API 콜로 발생하는 Timeout 문제 해결을 위해 multiprocessing하도록 제작함',
            },
            {
              content:
                '아직 DB에 삽입되지 않은, 한 번에 업로드되어 처리되는 데이터간의 relation이 손상되지 않으면서, 동일 데이터가 중복 정규화되지 않도록 제작함',
            },
          ],
        },
      ],
    },
    {
      title: 'GSA Infoteam Application Management',
      startedAt: '2020-02',
      endedAt: '2020-03',
      where: '개인 프로젝트',
      descriptions: [
        { content: "교내 학생회 산하 전산관련 자치회인 '인포팀' 신입팀원 지원 관리 시스템" },
        { content: '지원서 확인, 면접 스케줄 관리, 지원자와의 연락이 가능하도록 개발함' },
        {
          content:
            '지원서 접수 시 자동으로 접수완료 문자 전송, 면접 스케줄 안내 등을 위한 다량 문자 전송 시 데이터를 자동으로 치환하여 전송함',
        },
      ],
    },
    {
      title: 'Jubeat Tools',
      startedAt: '2017-10',
      where: '지인들과의 프로젝트',
      descriptions: [
        {
          content:
            "일본 KONAMI 사의 아케이드 게임 '유비트' 플레이 기록 관리를 위한 팬 사이트로, 백엔드 및 크롤러 개발을 담당함",
        },
        {
          content: '타 서비스와의 차별점으로 빠른 데이터 갱신이 가능하도록 설계함',
          descriptions: [
            { content: 'Websocket 기반 실시간 상태 확인 및 데이터 갱신 요청이 가능한 크롤러 제작' },
            { content: '별도 설정 없이 크롤러 갯수를 유동적으로 변경 가능하도록 개발함' },
            {
              content:
                'HTTP 기반 통신으로 인터넷이 가능한 곳 어디에서나 크롤러를 구동할 수 있도록 개발함',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
