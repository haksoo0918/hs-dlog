import { useState } from 'react';
import { getRandomInt } from '../../utils';
//
import jake1 from './jake1.png';
import jake2 from './jake2.png';
import jake3 from './jake3.png';
import jake4 from './jake4.png';
import jake5 from './jake5.png';

// 제이크 이미지들
const images = [jake1, jake2, jake3, jake4, jake5];
// 랜덤 제이크 이미지
const rondomJakeImage = () => images[getRandomInt(0, images.length)];

/**
 * 랜덤 제이크 이미지 컴포넌트
 * @return {React.JSX}
 */
function RandomJake() {
  const [jakeImage, setJakeImage] = useState(rondomJakeImage());

  const handleClick = () => {
    setJakeImage(rondomJakeImage());
  };

  return (
    <img
      className="rounded margin-bottom--md cursor-pointer"
      src={jakeImage}
      alt="jake"
      width="160"
      height="160"
      onClick={handleClick}
    />
  );
}

export default RandomJake;
