---
slug: typescript-process
title: 타입스크립트 동작 방식
description: TypeScript의 동작 원리를 간단히 설명
authors: haksoo
tags: [typescript, javascript, compile]
---

> TypeScript의 동작 원리를 간단히 요약

<!-- truncate -->

1. 코드 작성 - 개발자가 TypeScript로 코드를 작성한다. 이 코드는 JavaScript의 상위집합으로, 타입 정보와 추가 기능을 포함한다.
2. 컴파일 과정 - TypeScript 컴파일러(tsc)가 실행되면 다음과 같은 과정으로 진행된다.
   a. 파싱: 소스 코드를 추상 구문 트리(AST)로 변환
   b. 타입 체킹: AST를 분석하여 타입 오류를 검사
   c. 코드 생성: 타입 정보를 제거하고 JavaScript 코드로 변환
3. 출력 - 컴파일 결과로 파일이 생성된다.
   - JavaScript 파일(.js)
   - 타입 정의 파일(.d.ts)
   - 소스 맵 파일(.js.map, 선택적)
4. 실행 - 생성된 JavaScript 코드는 브라우저나 Node.js 환경에서 실행된다.

TypeScript의 핵심은 타입 체킹 단계에 있다. 이 과정에서 많은 잠재적 오류를 미리 발견하고 방지할 수 있다. 컴파일 과정에서 타입 정보는 제거되므로, 런타임에는 JavaScript 그대로 동작한다.

이러한 작동 원리 덕분에 TypeScript는 개발 단계에서 강력한 타입 안정성을 제공하면서도, 기존 JavaScript 생태계와 완벽하게 호환된다.

---

참조:

- https://velog.io/@ggob_2/typescript-2
- https://velog.io/@sehyunny/how-ts-compiler-compiles
