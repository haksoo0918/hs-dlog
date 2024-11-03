---
slug: package-lock
title: package-lock은 무얼하나
authors: haksoo
tags: [node, package]
---

## package manager란?

개발 프로젝트에서 필요한 패키지를 설치 및 관리하는 도구 입니다.

### package.json

프로젝트의 메타데이터 및 종속성 정보를 담고 있습니다. 그와 함께 필요한 패키지 목록과 버전 정보 등을 기록합니다. 이를 활용해 다른 개발자와 공유하고, 프로젝트를 배포하거나 다시 설치할 때 사용됩니다.

<!-- truncate -->

### package-lock.json

사용하는 패키지의 의존성 트리를 정확하게 기록합니다. 'package.json'은 버전 정보를 저장할 때 특정 버전이 아닌 버전의 범위를 저장하기도 하고, 환경에 따라 다른 node 버전을 사용하기도 하고, 패키지가 새로운 버전을 배포하는 경우가 있기고 하고 해서 각기 다른 'node_modules'를 가지는 경우가 생깁니다. 다시 말하면 같은 'package.json'을 가지고 있더라도 다른 'node_modules'폴더를 가질 수 있다는 것입니다. 이를 방지하고자 만들어진게 'package-lock.json'인 것입니다. 협력하는 개발자가 같은 'node_modules'를 갖게 해줍니다.

또 정확한 의존성 정보를 갖고 있기 때문에 npm이 패키지 버전 범위를 계산하는 과정을 생략할 수 있어 설치 속도가 빨라지기도 하고, 의도치 않은 새로운 버전의 패키지가 설치되는 것을 방지하기도 하여, 프로젝트의 안정성을 높입니다.

## 그래서

'package-lock.json' 파일은 프로젝트의 안정성과 일관성을 위하여 버전 관리 시스템에 포함되어야 합니다.

---

참조:

- https://jhhan009.tistory.com/74
- https://hyunjun19.github.io/2018/03/23/package-lock-why-need/
- https://velog.io/@dongeun-i/package.json-package-lock.json-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EC%9E%90
