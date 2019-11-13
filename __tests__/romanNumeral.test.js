import {romanTranslate} from './../src/scripts.js';

describe('translator', () => {

  test('should return the roman numeral of the input', () => {
    expect(romanTranslate(1)).toEqual("I");
    expect(romanTranslate(9)).toEqual("IX");
    expect(romanTranslate(10)).toEqual("X");
    expect(romanTranslate(49)).toEqual("XLIX");
    expect(romanTranslate(99)).toEqual("XCIX");
    expect(romanTranslate(100)).toEqual("C");
    expect(romanTranslate(449)).toEqual("CDXLIX");
    expect(romanTranslate(999)).toEqual("CMXCIX");
    expect(romanTranslate(3999)).toEqual("MMMCMXCIX");
  });
  test('should return a warning if the number is 4000 or larger', () => {
    expect(romanTranslate(4000)).toEqual("You can only use roman numerals to describe numbers under 4000!");
  });
});
