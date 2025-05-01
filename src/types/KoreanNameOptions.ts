export type KoreanNameOptions = {
  /**
   * 고유 숫자 자리 수 (기본: 4)
   * 예: 0001, 9999
   */
  digits?: number;

  /**
   * 단어 구분자 (기본: '-')
   * 예: '귀여운-수달-1234'
   */
  delimiter?: string;
};
