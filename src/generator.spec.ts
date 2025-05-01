import type { KoreanNameOptions } from './types/KoreanNameOptions';

import { generateKoreanName } from './generator';

const defaultOptions: KoreanNameOptions = {
  digits: 4,
  delimiter: '-',
};

test('형용사-동물-숫자 형식의 이름을 생성하는지 확인한다.', () => {
  // Arrange, Act
  const name = generateKoreanName();

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)${defaultOptions.delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('빈 옵션으로도 이름을 생성하는지 확인한다.', () => {
  // Arrange, Act
  const name = generateKoreanName({});

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)${defaultOptions.delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('명시적 undefined를 전달한 경우 기본 옵션으로 이름을 생성하는지 확인한다.', () => {
  // Arrange, Act
  const name = generateKoreanName(undefined);

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)${defaultOptions.delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('개별 옵션을 모두 명시적으로 undefined로 전달한 경우 기본 옵션으로 이름을 생성하는지 확인한다.', () => {
  // Arrange, Act
  const name = generateKoreanName({
    digits: undefined,
    delimiter: undefined,
  });

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)${defaultOptions.delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('특정 구분자를 사용한 이름을 생성하는지 확인한다.', () => {
  // Arrange
  const delimiter = '_';

  // Arrange, Act
  const name = generateKoreanName({ delimiter });

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${delimiter}([가-힣]+)${delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('빈 구분자를 사용한 이름을 생성하는지 확인한다.', () => {
  // Arrange
  const delimiter = '';

  // Arrange, Act
  const name = generateKoreanName({ delimiter });

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${delimiter}([가-힣]+)${delimiter}\\d{${defaultOptions.digits}}$`
    )
  );
});

test('숫자 자리 수를 지정한 이름을 생성하는지 확인한다.', () => {
  // Arrange
  const digits = 6;

  // Arrange, Act
  const name = generateKoreanName({ digits });

  // Assert
  expect(name).toMatch(
    new RegExp(
      `^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)${defaultOptions.delimiter}\\d{${digits}}$`
    )
  );
});

test('숫자 자리수가 0인 경우 숫자를 제외한 이름을 생성하는지 확인한다.', () => {
  // Arrange
  const digits = 0;

  // Arrange, Act
  const name = generateKoreanName({ digits });

  // Assert
  expect(name).toMatch(
    new RegExp(`^([가-힣]+)${defaultOptions.delimiter}([가-힣]+)$`)
  );
});

test('숫자 자리수가 음수인 경우 오류를 발생시키는지 확인한다.', () => {
  // Arrange
  const digits = -1;

  // Act, Assert
  expect(() => generateKoreanName({ digits })).toThrow(
    new Error('digits should be greater than 0')
  );
});
