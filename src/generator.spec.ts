import { generateKoreanName } from './generator';

describe('generateKoreanName', () => {
  it('should return a name in the format 형용사-동물-숫자', () => {
    const name = generateKoreanName();
    expect(name).toMatch(/^([가-힣]+)-([가-힣]+)-\d{4}$/);
  });
});
