/**
 * 랜덤 정수를 반환하는 함수
 * @param {number} min 최소값
 * @param {number} max 최대값
 * @return {number} 최소값과 최대값 포함한 사이의 랜덤 정수
 */
function getRandomInt(min = 0, max) {
  return min + Math.round(Math.random() * (max - min));
}

export { getRandomInt };
