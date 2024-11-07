---
title: svg 활용
description: svg를 리액트에서 효율적으로 사용하기
---

> svg를 리액트에서 효율적으로 사용하기

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
