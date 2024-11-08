---
slug: debouncing-throttling
title: 디바운싱(Debouncing)과 쓰로틀링(Throttling)
description: 둘 다 연속적으로 발생하는 이벤트를 줄여 성능 최적화에 사용되는 기법이다.
authors: haksoo
tags: [debouncing, throttling, event, 최적화]
---

둘 다 연속적으로 발생하는 이벤트를 줄여 성능 최적화에 사용되는 기법이다.

## 디바운싱(Debouncing)

연속으로 발생하는 이벤트 사이의 간격을 체크해서 잠시 멈춘 것으로 판단되는 부분을 가려 함수를 실행한다. 다시 말하면 이벤트 발생이 기준보다 늦게 발생할 때 함수를 실행한다. 예시로 검색어 자동완성 같은 기능에 사용 가능하다.

<!-- truncate -->

```jsx
let debounceTimer;

const debounceSearch = (searchTerm) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(`검색 요청: ${searchTerm}`);
    // api 요청 및 처리
  }, 300);
};

document.querySelector('#searchInput').addEventListener('input', (e) => {
  debounceSearch(e.target.value);
});
```

위 코드를 설명하면 0.3초 안에 이벤트가 발생하면 기존 이벤트를 지우고 다시 0.3초 기다린 후 실행하는 함수를 만든다. 다시 말하면 연속 발생하는 이벤트 간격이 0.3초 이상 벌어져야 함수가 한 번 실행된다.

## 쓰로틀링(Throttling)

일정 시간 간격으로 함수 실행을 제한 한다. 한마디로 게임에 쿨타임 같은거다. 한번 실행하면 일정 시간이 지나야 실행이 가능해 진다. 보통 스크롤 이벤트 처리 등에 사용된다.

```jsx
let throttleTimer;

const throttleScroll = () => {
  if (throttleTimer) return;

  throttleTimer = setTimeout(() => {
    console.log('스크롤 이벤트 처리');
    // 스크롤 관련 이벤트 처리
    throttleTimer = null;
  }, 200);
};

window.addEventListener('scroll', throttleScroll);
```

두 가지를 비교하면 다음과 같다.

1. **실행 빈도**:
   - 디바운싱: 연속 이벤트 중 마지막 이벤트 후에만 한 번 실행
   - 쓰로틀링: 일정 시간 간격으로 주기적으로 실행
2. **사용 사례**:
   - 디바운싱: 검색 자동완성, 입력 폼 유효성 검사
   - 쓰로틀링: 스크롤 이벤트 처리, 리사이즈 이벤트 처리
3. **동작 방식**:
   - 디바운싱: 이벤트 발생 시 타이머를 리셋하고 대기
   - 쓰로틀링: 일정 시간 동안 함수 실행을 막음
4. **성능 영향**:
   - 디바운싱: 연속 이벤트에서 함수 호출 횟수를 크게 줄임
   - 쓰로틀링: 함수 호출 빈도를 일정하게 유지

Lodash에 [\_.debounce](https://lodash.com/docs/4.17.15#debounce) 와 [\_.throttle](https://lodash.com/docs/4.17.15#throttle) 이 있으니 참고하면 좋을듯.

## Lodash를 활용한 다양한 예제들

검색 자동완성

```jsx
const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions');

const fetchSuggestions = _.debounce((query) => {
  // API 호출을 시뮬레이션
  console.log(`검색어 "${query}"에 대한 자동완성 요청`);
  // 실제로는 여기서 API를 호출하고 결과를 suggestionsContainer에 표시
}, 300);

searchInput.addEventListener('input', (e) => {
  fetchSuggestions(e.target.value);
});
```

폼 유효성 검사

```jsx
const emailInput = document.getElementById('email-input');
const emailStatus = document.getElementById('email-status');

const validateEmail = _.debounce((email) => {
  // 이메일 유효성 검사 로직
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  emailStatus.textContent = isValid ? '유효한 이메일입니다.' : '유효하지 않은 이메일입니다.';
}, 500);

emailInput.addEventListener('input', (e) => {
  validateEmail(e.target.value);
});
```

무한 스크롤

```jsx
const contentContainer = document.getElementById('content');
let page = 1;

const loadMoreContent = _.throttle(() => {
  // API 호출을 시뮬레이션
  console.log(`페이지 ${page}의 컨텐츠 로딩`);
  page++;
  // 실제로는 여기서 새 컨텐츠를 로드하고 contentContainer에 추가
}, 1000);

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadMoreContent();
  }
});
```

실시간 데이터 업데이트

```jsx
const dataDisplay = document.getElementById('data-display');

const updateData = _.throttle(() => {
  // 실시간 데이터 업데이트를 시뮬레이션
  const newData = Math.random();
  console.log(`새 데이터: ${newData}`);
  dataDisplay.textContent = newData;
}, 2000);

// 매우 빈번한 업데이트를 시뮬레이션
setInterval(updateData, 100);
```
