import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Button

> 그냥 기본 버튼

간단히 만들려고 했는데 길어졌다. 맘에 안든다. 😑

<Tabs>
<TabItem value="scss" label="scss" default>

```scss
@use 'sass:color';

.btn {
  $font-color: #1c1e21 !default;
  $bg-color: #e3e3e3 !default;
  $amount: -15% !default;
  [data-theme='dark'] & {
    $font-color: #e3e3e3;
    $bg-color: #1c1e21;
    $amount: 10%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: $font-color;
  border: 1px solid $font-color;
  border-radius: 0.5rem;
  background-color: $bg-color;
  padding: 0.5rem 1rem;
  transition: background-color ease 150ms;

  &:hover {
    background-color: color.adjust($bg-color, $lightness: $amount);
  }

  &.disabled,
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
```

</TabItem>
<TabItem value="tailwind" label="tailwind">

```scss
@use 'sass:color';

.btn {
  $font-color: #1c1e21 !default;
  $bg-color: #e3e3e3 !default;
  $amount: -15% !default;
  [data-theme='dark'] & {
    $font-color: #e3e3e3;
    $bg-color: #1c1e21;
    $amount: 10%;
  }

  @apply flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-color;
  color: $font-color;
  border-color: $font-color;

  &:hover {
    background-color: color.adjust($bg-color, $lightness: $amount);
  }

  &.disabled,
  &:disabled {
    @apply point-events-none opacity-50;
  }
}
```

</TabItem>
</Tabs>
