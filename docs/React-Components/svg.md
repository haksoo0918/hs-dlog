---
title: svg 활용
description: svg를 리액트에서 효율적으로 사용하기
tags: [react, next, svg, svgr]
---

> svg를 리액트에서 효율적으로 사용하기  
> ➕ 추가 넥스트 & svgr 사용하기

대게는 그냥 이미지에 넣는게 기본적인 사용 방법이다.

```jsx
import icon from '../assets/images/icon.svg';

export default function Component() {
  return <img src={icon} alt="" />;
}
```

이렇게 써야 하는 건 아니지만, 경우에 따라 이렇게 사용하면 좋다.

```xml title="icon.svg"
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <!-- 생략 -->
</svg>
```

```jsx title="Component.jsx"
import { ReactComponent as Icon } from '../assets/images/icon.svg';

function Component() {
  return (
    <>
      <h1>Test svg icon</h1>
      <Icon width="20px" height="20px" />
    </>
  );
}

export default Component;
```

이렇게 사용하면 svg코드를 그대로 가져와 스타일을 입히는게 가능하다.

또는 아이콘 같은 경우 한꺼번에 가져와서 다음과 같이 처리할 수도 있다.

```jsx title="Icons.jsx"
const icons = {
  cap: (w, h, c) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={w}
      height={h}
      className={c}
    >
      <path d="..." />
    </svg>
  ),
  circle: (w, h, c) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={w}
      height={h}
      className={c}
    >
      <path d="..." />
    </svg>
  ),
};

function Icons({ name, width = 24, height = 24, className = '' }) {
  return icons[name](width, height, className);
}

export default Icons;
```

```jsx title="Component.jsx"
import Icons from '../components/Icons';

function Component() {
  return (
    <>
      <h1>Test svg icon</h1>
      <Icons name="circle" width="48px" height="48px" />
    </>
  );
}

export default Component;
```

이렇게 하면 한꺼번에 처리할 수 있다.

## + 추가 넥스트 & svgr 패키지 사용하기

우선 svgr 부터 설치하자.

```shell
# npm
npm istall --save-dev @svgr/webpack

# yarn
yarn add --dev @svgr/webpack
```

그리고 `next.config.js` 에서 설정해줘야 한다.  
다음은 [svgr 공식 사이트](https://react-svgr.com/docs/next/)에 있는걸 가져왔다.

```js title="next.config.js"
module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // ...other config
};
```

다음과 같이 사용할 수 있다.

```jsx
// 컴포넌트로 사용하기
import Icon from './icon.svg';
// 주소값으로 사용하기
import IconUrl from './icon.svg?url';

const Example = () => {
  <>
    <Icon />
    <Image src={IconUrl} width="20" height="20" alt="icon" />
  </>;
};
```

주소값으로 사용할 때는 파일 주소 뒤에 `?url`을 붙여줘야 한다.

그리고 타입스크립트 `Cannot find module`에러가 나면 타입 정의를 추가해 줘야 한다.

```ts title="svgr.d.ts"
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}
```

설정 파일이 `tsconfig.json`에 include 되어 있는지도 확인해보자.

## 이건 svg 파일 사용에 대한 팁인데,

- 색상을 사용할땐 `currentColor`값을 활용하면 좋고,
- `img`의 alt속성 대신은 아니지만 `title` 요소를 추가해 사용하면 웹접근성에 좋다.
- svg 확장을 활용해 `minify`시키는 것도 고려해 볼 만 하다.
  - `minify` 시킬때는 옵션을 잘 확인해야 한다. viewBox나 title등...

---

참조:

- https://react-svgr.com/
