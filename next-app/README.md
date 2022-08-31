### FEEDOONG Next App

#### 기술 스택

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

#### 폴더 구조

```
├── public
└── src
    ├── api
    │   └── index.ts
    ├── components
    │    ├── common
    │    │   └── PostCard
    │    └── views
    │        └── Feeds
    │            ├── api
    │            │   └── useGetFeeds.ts
    │            ├── hooks
    │            │   └── useFeedsPagination.ts
    │            ├── FeedsContainer.style.tsx
    │            └── FeedsContainer.tsx
    ├── types
    │   └── feeds.ts
    ├── services
    │   └── feeds.ts
    ├── hooks
    │   └── useScripts.ts
    ├── pages
    │   └── index.tsx
    └── styles
```

| 분류             | 설명                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| styles           | 스타일과 관련된 폴더                                                                                                                           |
| api              | axios client를 정의하며, services에 정의할 fetcher 내부에서 사용한다                                                                           |
| services         | 특정 엔드 포인트(Domain)에 대한 개별 fetcher를 모아두는 경로                                                                                   |
| hooks            | 유틸성 hooks를 모아두는 경로                                                                                                                   |
| types/common     | 유틸성 type들을 모아두는 경로                                                                                                                   |
| types/model      | 서버에서 호출해 온 데이터의 타입을 도메인별로 정의하는 폴더                                                                                    |
| pages            | 라우트 역할을 하며, 각 페이지 별 로직(레이아웃, 서버 사이드 호출 등)을 처리하는 경로                                                           |
| components       | 컴포넌트를 담아두는 경로이며, 공용 컴포넌트는 `common`, 특정 페이지의 view는 `views`에 모아둔다. `[Page].tsx` 형태로 파일을 생성해서 사용한다. |
| views/[Page명]/api   | React Query와 fetcher를 조합한 커스텀 훅을 정의하는 경로로서, 서버와 연관된 Domain 로직을 처리한다. `use[Method][Page].tsx` 형태로 사용한다    |
| views/[Page명]/hooks | 서버 호출과 관련 없는 로직(ex. UI) 중 커스텀 훅으로 분리할만한 로직을 처리하는 경로                                                            |

#### 컴포넌트 관련 컨벤션

```tsx
// pages/index.tsx
import MyPageView from "components/views/MyPage"

const MyPage = () => {
  return <MyPageView />
}
```

```tsx
// Foo.tsx
import * as S from './Foo.style'

interface Props {
  name: string
  age?: number
}

const Foo = ({ name, age }: Props) => {
  return (
    <S.Container>
      {name} {age}
    </S.Container>
  )
}
```

```tsx
// Foo.style.tsx
import styled from 'styled-components'

export const Container = styled.div`
  color: red;
`
```
