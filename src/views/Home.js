import React, {useState} from 'react';

function Home (){
  const [counter, setCounter] = useState(0); // Initialise le compteur à 0

  const onIncrement = () => {
    setCounter(counter + 1); // Incrémente le compteur 
  };

  const onDecrement = () => {
    if (counter > 0) { // Vérifie si le compteur est supérieur à 0 avant de décrémenter
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>

      <button onClick={onDecrement} disabled={counter === 0}>
       Annuler votre clic {counter}
      </button>
    </div>
  )
}

export default Home;
