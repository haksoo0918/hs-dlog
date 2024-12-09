import Dropdown, { ALIGN_VALUES } from './index';
import clsx from 'clsx';
import styles from './ExampleDropdown.module.css';

export default function ExampleDropdown() {
  return (
    <div className={clsx('example', styles.fixHeight)}>
      <Dropdown buttonText="default(left)">
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#/">link 1</a>
          </li>
          <li className={styles.item}>
            <a href="#/">link 2</a>
          </li>
        </ul>
      </Dropdown>

      <Dropdown buttonText="right" align={ALIGN_VALUES.right}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#/">link 1</a>
          </li>
          <li className={styles.item}>
            <a href="#/">link 2</a>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
