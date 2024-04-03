import React, {useState} from 'react';

function Home (){
  const [counter, setCounter] = useState(0); // Initialise le compteur à 0

  const onIncrement = () => {
    setCounter(counter + 1); // Incrémente le compteur 
  };

  return (
    <div>
      <button onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>
    </div>
  )
}

export default Home;
