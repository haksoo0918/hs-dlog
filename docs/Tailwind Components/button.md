# Button

> 그냥 버튼

```css title="common.css"
.btn {
  /* 버튼 색상과 텍스트 색상, 마우스 오버시 버튼 색상 추가 */
  @apply flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-colors;

  &.disabled,
  &:disabled {
    @apply point-events-none opacity-50;
  }
}
```
