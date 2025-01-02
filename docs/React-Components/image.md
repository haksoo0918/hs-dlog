---
title: Image Component
description: 대게 이미지가 깨질 수 도 있는 경우를 대비한 이미지 컴포넌트
sidebar_label: Image
tags: [react, next, image, component, error]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> 대게 이미지가 깨질 수 도 있는 경우를 대비한 이미지 컴포넌트

새로운 소스를 하나 추가했다.  
기존에 있던 소스는 자바스크립트기반 리액트 컴포넌트 였고, 새로 추가한 소스는 타입스크립트 기반의 넥스트 컴포넌트 이다.

<Tabs>
<TabItem value="react" label="React" default>

```jsx title="Img.jsx"
import noImage from '../assets/no-image.svg';

const handleError = (e) => {
  e.target.src = noImage;
};

/**
 * 이미지 컴포넌트 - 이미지 에러 처리
 * @param {object} props
 * @param {string} props.src : 이미지 주소
 * @param {string} props.alt : 이미지 대채 문구
 * @param {any[]} props.props : 나머지 속성들
 * @return {React.JSX}
 */
function Img({ src = noImage, alt = '', ...props }) {
  return <img src={src} alt={alt} {...props} onError={handleError} />;
}

export default Img;
```

</TabItem>
<TabItem value="next" label="Next.js">

```tsx title="Image.tsx"
import Image, { ImageProps } from 'next/image';
import NoImage from '@/public/images/common/no-image.svg?url';

/**
 * @interface Props
 * @property {boolean} Props.useImg - img 태그 사용 여부
 * @property {string} Props.src - 이미지 경로
 * @property {string} Props.alt - 이미지 설명
 */
interface Props extends ImageProps {
  useImg?: boolean;
  src: string;
  alt: string;
}

/**
 * 이미지 로드 실패 시 처리
 * @param {Event} e - 실패 이벤트
 */
const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  target.srcset = '';
  target.src = NoImage.src;
};

export default function Img({ useImg = false, src, alt = '', ...props }: Props) {
  const imgProps = {
    src: src || NoImage,
    alt,
    onError: handleError,
    ...props,
  };

  return useImg ? (
    <img {...imgProps} />
  ) : (
    <Image
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      {...imgProps}
    />
  );
}
```

</TabItem>
</Tabs>

요건 나름 맘에 든다.
