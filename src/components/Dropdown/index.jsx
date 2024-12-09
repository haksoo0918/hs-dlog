import styles from './Dropdown.module.css';
import clsx from 'clsx';

export const ALIGN_VALUES = {
  left: 'left',
  right: 'right',
};
export const DIRECTION_VALUES = {
  up: 'up',
  down: 'down',
};

export default function Dropdown({
  buttonText,
  buttonClass,
  direction = DIRECTION_VALUES.down,
  align = ALIGN_VALUES.left,
  children,
}) {
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
