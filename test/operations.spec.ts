import { add } from '../src/operations';

describe('Operations tests', () => {
  it('adds 2 numbers', () => {
    console.log('length', add.length);
    const addMock = nest.curry(add, 2);
    const result = addMock(3)(5);

    expect(result).toBe(8);
    expect(addMock.uncurried).toHaveBeenCalledWith(3, 5);
  });
});
