import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../actions/counterAction'
import styled from 'styled-components';

function Counter ({counter, onIncrement, onDecrement}){
  return (
    <CounterStyled>
    <div>
      <div className="counter-text">Vous avez cliqué {counter} fois</div>
      <div>
        <button onClick={onIncrement}>
          Cliquer ici
        </button>

        <button onClick={onDecrement} disabled={counter === 0}> 
        Annuler votre clic
        </button>
      </div>
    </div>
    </CounterStyled>
  )
  }

  const mapStateToProps = (state) => ({
    counter: state.counter.count,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterStyled = styled.div`
display: flex;
justify-content: center;
text-align: center;

.counter-text{
  margin-bottom: 20px; 
}

button{
  background-color: aliceblue;
  padding: 9px;
  margin: 0 5px;
  border-radius: 10px;
  font-size: 20px;
}
`;


