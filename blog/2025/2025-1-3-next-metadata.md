---
slug: next-metadata
title: 넥스트 프로젝트에 metadata를 넣자. SEO를 위해서!
description: SEO는 중요하다. 많이 중요하다.
authors: haksoo
tags: [next, meta, seo]
---

넥스트 프로젝트에 metadata를 넣자. SEO를 위해서!  
SEO는 중요하다. 많이 중요하다.  
참고로 **page router** 에서는 `next/head`를 사용하고, **app router** 에서는 `metadata`를 사용한다.  
여기서는 `metadata`만 설명한다.

<!-- truncate -->

```tsx
import type { Meatadata } from 'next';

// 이거는 static 한 방법
// 그래서 정적인 layout.js 나 page.js 에서 사용함
export const metadata: Metadata = {
  title: '...',
};

// 이거는 dynamic 한 방법
// 동적인 페이지에서 사용함
export async function generateMetadata({ params }) {
  return {
    title: '...',
  };
}
```

여기는 기본적인 사용법이나 필수적인 값만 정리했다.  
자세한 정보나 사용법, 다이나믹 등은 [레퍼런스 사이트](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)를 참조하자.

먼저 기본적인 사용법을 정리하면...
우선 `layout.tsx` 에서 다음과 같이 정의하고,

```tsx title="layout.tsx"
export const metadata: Metadata = {
  title: {
    template: '%s | HS dlog',
    default: 'HS dlog',
  },
};
```

상세 페이지 `about/page.tsx` 에서 다음처럼 사용하면 된다.

```tsx title="about/page.tsx"
export const metadata: Metadata = {
  title: 'About', // result: <title>About | HS dlog</title>
  title: {
    absolute: 'About',
  }, // result: <title>About</title>
};
```

필수적인 것만 정리해보자. 우선 `layout.tsx`

```tsx title="layout.tsx"
import type { Meatadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | 사이트 이름',
    default: '사이트 이름',
  },
  // icons: {}, // 여기서 정의해도 되는데 파일기반을 가능한 파일기반을 이용하자
  // ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
  description: '사이트 설명',
  keywords: ['사이트', '키워드', '몇개만'], // 키워드는 애매하다
  openGraph: {
    title: '페이지 제목',
    description: '페이지 설명',
    url: '페이지 주소', // window.location.href 가 편한듯
    siteName: '사이트 이름',
    images: [
      {
        url: 'http://example.com/logo.png', // 절대 절대주소
        width: 800,
        height: 600,
        alt: 'HS dlog Logo',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '페이지 제목',
    description: '페이지 설명',
    images: ['페이지 대표 이미지'],
  },
};
```

상세 페이지 - `about/page.tsx`

```tsx title="about/page.tsx"
import type { Meatadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: '페이지 설명',
  openGraph: {
    title: '페이지 제목',
    description: '페이지 설명',
    url: '페이지 주소', // window.location.href 가 편한듯
    images: [
      {
        url: '페이지 대표 이미지', // 절대 절대주소
        width: 800,
        height: 600,
        alt: '페이지 대표 이미지 설명',
      },
    ],
    // videos: [], // 상세페이지 콘텐츠가 비디오일때 추가
    // audio: [], // 상페페이지 콘텐츠가 오디오일때 추가

    // type에는 website, article, video, music, book 등이 있음
    // type이 article 일 경우 author, publishedTime 등 추가 정의 가능
    type: 'website',
  },
  twitter: {
    // card 에는 summary, summary_large_image, player 등이 있음
    card: 'summary_large_image',
    title: '페이지 제목',
    description: '페이지 설명',
    images: ['페이지 대표 이미지'], // 역시 절대주소
  },
};
```

이정도면 기본값들은 다 넣은 것 같다.

그 외 다양한 것들이 있다. 필요하면 그때 찾아보자.

- themeColor
- manifest
- appLinks
- robots
- 기타 등등
