---
title: Dropdown Component
description: 드롭다운 컴포넌트
sidebar_label: Dropdown
tags: [react, dropdown, component]
---

import ExampleDropdown from '../../src/components/Dropdown/ExampleDropdown';

기능에 최대한 스크립트는 제외했다.

아직 작업 중이다. 기본적인 형태만이라도 이뿌게 되면 올릴 예정이다.  
더 나중엔 넥스트까지 해야지...

<ExampleDropdown />

```jsx title="Dropdown.jsx"
import styles from './Dropdown.module.css';
import clsx from 'clsx';

export const ALIGN_VALUES = {
  left: 'left',
  right: 'right',
};

export default function Dropdown({ buttonText, buttonClass, align = ALIGN_VALUES.left, children }) {
  return (
    <div className={styles.dropdown}>
      <button className={clsx(styles.btn, 'button button--primary', buttonClass)} type="button">
        {buttonText}
      </button>
      <div className={clsx(styles.more, align === ALIGN_VALUES.right && styles.right)}>
        {children}
      </div>
    </div>
  );
}
```

```css title="Dropdown.module.css"
.dropdown {
  --border-color: var(--ifm-color-primary-dark);
  --border-radius: var(--ifm-button-border-radius);

  position: relative;

  .btn {
    &:after {
      content: '';
      display: inline-block;
      height: 0;
      margin-left: 12px;
      border-top: 6px solid var(--ifm-button-color);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      vertical-align: middle;
    }
    &:focus + .more,
    & + .more:focus-within {
      opacity: 1;
      grid-template-rows: 1fr;
    }
  }
  .more {
    position: absolute;
    display: grid;
    grid-template-rows: 0fr;
    margin-top: 4px;
    top: 100%;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    opacity: 0;
    transition: opacity 0.3s, grid-template-rows 0.3s;

    & > * {
      overflow: hidden;
    }

    &.right {
      left: auto;
      right: 0;
    }
  }
}
```
