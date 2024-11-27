---
slug: style-package
title: 스타일 관련 거의 필수 패키지들
description: 스타일 관련 거의 필수 패키지들
authors: haksoo
tags: [style, css, autoprefixer, postcss, tailwindcss, package]
---

> 스타일 관련 패키지 모음이다. 설치하고 설정만 하고 사용하면 된다. 쉽다.

만약 아직 tailwindcss를 사용하지 않는다면 사용해보길 추천한다. 괜히 많이 쓰는게 아니다. 사용하는 방법도 다양하니 자신에게 맞게 사용하는 것도 가능하다.

기본적으로 설치 해야 할 패키지는 다음과 같다.

<!-- truncate -->

- autoprefixer
- postcss
- postcss-nesting
- tailwindcss

```shell
npm i -D autoprefixer postcss postcss-nesting tailwindcss
```

전부 개발 의존성으로 설치하면 된다.
그리고 설정만 하면 된다.

설정 파일을 만들자.

```shell
npx tailwindcss init -p
```

만들어진 설정 파일을 수정하면 끝이다.

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js title="postcss.config.js"
module.exports = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
  },
};
```

위 tailwindcss 설정은 Next.js 용이다. 다른 설정은 [tailwindcss 공홈](https://tailwindcss.com/)에서 확인해보면 되는데, 크게 차이 없다. 찬찬히 살펴보면 충분히 고쳐 사용 가능하다.

물론 tailwindcss 설정은 tailwindcss를 사용하다 보면 찾아보고 설정할 것들이 늘어날 가능성은 크다.

---

참조

- https://tailwindcss.com/
