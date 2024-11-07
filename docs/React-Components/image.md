---
title: Image Component
description: 대게 이미지가 깨질 수 도 있는 경우를 대비한 이미지 컴포넌트
---

> 대게 이미지가 깨질 수 도 있는 경우를 대비한 이미지 컴포넌트

```jsx title="Img.jsx"
import noImage from '../assets/no-image.svg';

const handleError = (e) => {
  e.target.src = noImage;
};

/**
 * 이미지 컴포넌트 - 이미지 에러 처리
 * @param {string} src : 이미지 주소
 * @param {string} alt : 이미지 대채 문구
 * @param {object} props : 나머지 속성들
 * @return {React.JSX}
 */
function Img({ src = noImage, alt = '', ...props }) {
  return <img src={src} alt={alt} {...props} onError={handleError} />;
}

export default Img;
```
