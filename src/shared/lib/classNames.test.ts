import { classNames } from 'shared/lib/classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass'))
      .toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass hovered class1 class2';
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
      .toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass hovered class1 class2';
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
      .toBe(expected);
  });
});
