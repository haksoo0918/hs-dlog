---
slug: docusaurus-font
title: Docusaurus 글꼴 설정
description: Docusaurus 글꼴 설정을 바꿔보았다.
authors: haksoo
tags: [docusaurus, font, family, gowun, d2coding]
---

갑자기 글꼴이 바꾸고 싶어졌다. 이뿐걸로.

그래서 찾아봤는데, 이게 젤 나은 방법인거 같아 이걸 선택했다.

<!-- truncate -->

우선 `style.css`에 있는 변수 설정되어 있는 부분에서 가져왔다.

폰트는 구글폰트에 있는 'Gowun Dodum', 'Gowun Batang' 이렇게 2개와 npm에 올라와 있는 [d2coding](https://www.npmjs.com/package/d2coding)을 가져왔다.

그리고 `css/custom.css`에 다음 내용을 추가했다.

```css title="custom.css"
/* import font css */
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Gowun+Dodum&display=swap');
@import url('https://cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-subset.css');

:root {
  /* 글꼴 정리 */
  --font-family-base: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,
    BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-family-dodum: 'Gowun Dodum';
  --font-family-batang: 'Gowun Batang';
  --font-family-d2coding: 'D2Coding';

  --ifm-font-family-base: var(--font-family-dodum), var(--font-family-base);
  --ifm-font-family-monospace: var(--font-family-d2coding), var(--font-family-monospace);
  --ifm-heading-font-family: var(--font-family-batang), var(--font-family-base);
}
```

막 바꿨기 때문인지 아직까진 맘에 든다. 😊

---

참조:

- https://wan2.land/posts/2019/05/25/d2coding-webfont/
