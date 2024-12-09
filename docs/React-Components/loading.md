---
title: Loading Component
description: loading을 표현하는 컴포넌트
sidebar_label: Loading
tags: [react, loading, component]
---

import ExampleLoading from '../../src/components/Loading/ExampleLoading';

> loading을 표현하기 위한 컴포넌트를 만들었다.

다른것 보다 스타일에 `:root`가 하이라이트 이다.  
이전에는 `body`에 `overflow: hidden`을 넣었었는데, 필요없어 졌다.  
그래서 `body`에 접근할 필요도 없어졌다.

현재는 전체 화면을 덮는 형태인데... 좀 더 고민을 해봐야 할 것 같다.  
다양한 상황에서 활용될 수 있는 방향으로...
도는 녀석도 spinner로 따로 빼야겠다.

밑에 예제는 누르면 3초간 로딩이 표시된다.

<ExampleLoading />

```jsx title="Loading.jsx"
import './loading.scss';

/**
 * 로딩 컴포넌트
 * @param {object} props
 * @param {boolean} props.isVisible : 로딩 여부 -> 노출 결정
 * @param {any} props.children : 같이 노출될 요소
 * @return {React.JSX} : 로딩 컴포넌트
 */
function Loading({ isVisible = false, children }) {
  return (
    <>
      {isVisible && (
        <div id="loading" className="loading">
          {children}
        </div>
      )}
    </>
  );
}

export default Loading;
```

```scss title="loading.scss"
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes blur {
  to {
    backdrop-filter: blur(4px);
  }
}

/* highlight-start */
:root:has(#loading) {
  overflow: hidden;
  scrollbar-gutter: stable;
}
/* highlight-end */

.loading {
  position: fixed;
  inset: 0;
  z-index: 900;
  display: flex;
  gap: 0.5rem;
  height: 100dvh;
  width: 100dvw;
  align-items: center;
  justify-content: center;
  animation: blur 1s linear forwards;
  background-color: #3333;
  backdrop-filter: blur(0);

  &::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid var(--ifm-color-primary-lightest);
    border-bottom-color: var(--ifm-color-primary-darkest);
    border-radius: 50%;
    animation: spin 1s ease infinite;
    background-color: transparent;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);
  }
}
```
