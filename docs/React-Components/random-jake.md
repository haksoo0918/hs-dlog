---
title: Random Jake
description: Random으로 나오는 Jake이미지
---

import RandomJake from '../../src/components/RandomJake'

맨 처음엔 그냥 제이크 이미지를 썸네일 처럼 사용했다가 나중에 랜덤으로 나왔으면 좋겠다는 생각이 들면서 만들게 되었다.

로딩할때도 랜덤으로 나오고 클릭하면 그때도 랜덤으로 바뀌고... 별 다른 기능은 없다. ㅎㅎ;

<div class="example">
  <RandomJake />
</div>

```jsx title="RandomJake.jsx"
import { useState } from 'react';
import { getRandomInt } from '../../utils';
//
import jake1 from './jake1.png';
import jake2 from './jake2.png';
import jake3 from './jake3.png';
import jake4 from './jake4.png';
import jake5 from './jake5.png';

// 제이크 이미지들
const images = [jake1, jake2, jake3, jake4, jake5];
// 랜덤 제이크 이미지
const rondomJakeImage = () => images[getRandomInt(0, images.length - 1)];

/**
 * 랜덤 제이크 이미지 컴포넌트
 * @return {React.JSX}
 */
function RandomJake({ className }) {
  const [jakeImage, setJakeImage] = useState(rondomJakeImage());

  const handleClick = () => {
    setJakeImage(rondomJakeImage());
  };

  return (
    <img
      className={`rounded cursor-pointer ${className}`}
      src={jakeImage}
      alt="jake"
      width="160"
      height="160"
      onClick={handleClick}
    />
  );
}

export default RandomJake;
```

이상이다.
