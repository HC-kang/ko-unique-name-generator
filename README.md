# ko-unique-name-generator

🇰🇷 한국어 형용사 + 동물 + 숫자 조합으로 고유하고 기억하기 쉬운 이름을 생성하는 Node.js 라이브러리입니다.

> 예: `귀여운-수달-1230`, `조용한-호랑이-4560`

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

### 옵션 사용

```ts
generateKoreanName({
  digits: 6,         // 숫자 자릿수 (기본값: 4)
  delimiter: '_'     // 구분자 (기본값: '-')
});
// 예: '기분좋은_여우_034120'
```

```ts
generateKoreanName({
  digits: 0,         // 숫자를 사용하지 않음
  delimiter: '',    // 구분자를 사용하지 않음
});
// 예: '기분좋은여우'
```

```ts
// ❌ 잘못된 사용
generateKoreanName({ digits: -1 });
// Error: digits should be greater than 0
```

---

## 📦 반환 포맷

기본적으로 다음 형태의 문자열을 반환합니다:

```
형용사{delimiter}동물{delimiter}숫자
```

예: `용감한-토끼-0042`, `느긋한_수달_8102`

---

## ⚙️ 옵션

| 옵션       | 타입     | 설명                           | 기본값 |
|------------|----------|--------------------------------|--------|
| `digits`   | `number` | 생성할 숫자의 자릿수. 0일 경우 숫자 사용 안함 | `4`    |
| `delimiter`| `string` | 각 단어를 구분할 문자열. 빈 문자열일 경우 구분자 사용 안함 | `'-'`  |

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

PR을 환영합니다! 특히 다음과 같은 기여는 더욱 감사드립니다:

- 형용사/동물 목록 확장
- 다양한 조합 방식 (예: 색상, 감정, 장소 등)
- seed 기반 결정론적 이름 생성기
- blacklist 또는 필터링 기능

---

## 📄 라이선스

[MIT](LICENSE)

---

## 👤 Author

[heechankang](https://www.npmjs.com/~heechankang)
