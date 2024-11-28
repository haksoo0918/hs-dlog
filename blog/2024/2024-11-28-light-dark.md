---
slug: light-dark
title: light-dark() 활용한 테마 적용
description: light-dark 함수 소개 및 활용 예제
authors: haksoo
tags: [style, css, light, dark, theme]
---

> light-dark() 는 CSS에서 사용하는 함수다!

이 함수는 라이트 모드와 다크 모드에 대한 색상을 한 줄로 정의할 수 있게 해 준다. 이걸 활용하면 미디어 쿼리 없이도 두 가지 색상을 쉽게 지원할 수 있다.

<!-- truncate -->

## 사용 방법

두 개의 색상 값을 인자로 받는다.

```css
// light-dark(light-mode-color, dark-mode-color);
:root {
  color-scheme: light dark;
}

body {
  background-color: light-dark(#fff, #000);
  color: light-dark(#000, #fff);
}
```

주의사항으로는 예제와 같이 `:root` 선택자에 `color-scheme: light dark;`가 있어야 함수를 사용할 수 있다.

## 이걸 좀더 예쁘게 적용해 보면...

간단한 예를 위해 radio로 테마를 선택하는 컴포넌트를 만들었다

```html
<div class="row gap align-top">
  테마 선택:
  <label><input name="color-scheme" type="radio" value="light dark" checked />시스템</label>
  <label><input name="color-scheme" type="radio" value="light" />라이트</label>
  <label><input name="color-scheme" type="radio" value="dark" />다크</label>
</div>
```

```css
:root {
  color-scheme: light dark;
  --primary-color: light-dark(#333, #fafafa);
  --primary-bgcolor: light-dark(#e4e4e4, #121212);
}

:root {
  /* 위에서 부터 시스템 테마, 라이트 테마, 다크 테마에 해당한다. */
  &:has(input[name='color-scheme'][value='light dark']:checked) {
    color-scheme: light dark;
  }
  &:has(input[name='color-scheme'][value='light']:checked) {
    color-scheme: light;
  }
  &:has(input[name='color-scheme'][value='dark']:checked) {
    color-scheme: dark;
  }
}

body {
  color: var(--primary-color);
  background-color: var(--primary-bgcolor);
}
```

이런식으로 하면 시스템과 사용자의 선택을 지원하는 방향으로 만들 수 있다.

브라우저 지원은 [여기](https://caniuse.com/mdn-css_types_color_light-dark)서 확인하자.(작성일 기준 '82.91%'가 지원하고 있다.)

---

참조:

- https://web.dev/articles/light-dark?hl=ko
