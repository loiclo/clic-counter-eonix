// counterActions.test.js
import { increment, decrement } from '../actions/counterAction';

describe('counter actions', () => {
  it('increment should create INCREMENT action', () => {
    expect(increment()).toEqual({ type: 'INCREMENT' });
  });
  
  it('decrement should create DECREMENT action', () => {
    expect(decrement()).toEqual({ type: 'DECREMENT' });
  });
});



