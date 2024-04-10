import configureMockStore from 'redux-mock-store';
import {decrement} from '../actions/counterAction';
import { render, fireEvent } from '@testing-library/react';


const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Composant Counter', () => {  
    it('devrait dispatcher l’action de décrément', () => {
      const initialState = { counter: { count: 1 } };
      const store = mockStore(initialState);
      store.dispatch = jest.fn();
  
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
  
      fireEvent.click(getByText('Annuler votre clic'));
      expect(store.dispatch).toHaveBeenCalledWith(decrement());

    });
  });
