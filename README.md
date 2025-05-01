# ko-unique-name-generator

🇰🇷 한국어 형용사 + 동물 + 숫자 조합으로 고유하고 기억하기 쉬운 이름을 생성하는 Node.js 라이브러리입니다.

> 예: `귀여운-수달-1230`, `조용한-호랑이-4560`, `멋진-토끼-7890`

---

## ✨ 설치

```bash
npm install ko-unique-name-generator
```

---

## 🚀 사용법

### 기본 사용

```ts
// ESM
import { generateKoreanName } from 'ko-unique-name-generator';

const name = generateKoreanName();
console.log(name); // 예: '귀여운-수달-1230'
```

```ts
// CJS
const { generateKoreanName } = require('ko-unique-name-generator');

const name = generateKoreanName();
console.log(name); // 예: '귀여운-수달-1230'
```

---
## 📦 반환 포맷

기본적으로 `"형용사-동물-0000"` 형태의 문자열을 반환합니다.

향후 옵션:

- 구분자 변경 (예: `_`, 공백 등)
- 숫자 자릿수, 범위 설정
- Seed 중 블랙리스트 설정 (예: 특정 형용사 또는 동물 제외)

---

## 🧪 테스트

```bash
npm run build
npm test
```

---

## 🛠 개발

### 빌드

```bash
npm run build
```

---

## 🤝 기여

PR 환영합니다! 특히 다음에 대한 기여를 환영합니다:

- 형용사/동물 목록 확장
- 다양한 조합 방식 (예: 색상, 감정 등)
- seed 기반 생성 방식

---

## 📄 라이선스

[MIT](LICENSE)

---

## 👤 Author

[heechankang](https://www.npmjs.com/~heechankang)
