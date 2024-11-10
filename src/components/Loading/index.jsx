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
