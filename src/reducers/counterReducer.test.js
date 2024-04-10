import counterReducer from '../reducers/counterReducer';
import { increment, decrement } from '../actions/counterAction';

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ count: 0 });
  });
  it('should handle INCREMENT', () => {
    expect(counterReducer({ count: 0 }, increment())).toEqual({ count: 1 });
  });

  it('should handle DECREMENT', () => {
    expect(counterReducer({ count: 1 }, decrement())).toEqual({ count: 0 });
  });
});



