import styles from './modal.module.scss';

function Modal({ isVisible = false, type, onConfirm, onCancel }) {
  return (
    <div>
      <div className={styles.modal}></div>
    </div>
  );
}

export default Modal;
