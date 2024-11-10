import { useState } from 'react';
import Loading from './index';

function ExampleLoading({ delay = 3000 }) {
  const [isVisible, setIsVisible] = useState(false);

  const onLoading = () => {
    console.log('fn:toggleVisible');
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, delay);
  };

  return (
    <div className="example">
      <Loading isVisible={isVisible} />

      <button type="button" className="button button--primary" onClick={onLoading}>
        Loading On
      </button>
    </div>
  );
}

export default ExampleLoading;
