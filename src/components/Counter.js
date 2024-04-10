import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../actions/counterAction'

function Counter ({counter, onIncrement, onDecrement}){
  return (
    <div>
    Vous avez cliqué {counter} fois
      <div>
        <button onClick={onIncrement}>
          Cliquer ici
        </button>

        <button onClick={onDecrement} disabled={counter === 0}> 
        Annuler votre clic
        </button>
      </div>
    </div>
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
