import React from 'react';
import Button from './Button';

function Counter({ setFruitCount, fruitCount}) {

    return (
      <>
        <Button
            type="button"
            disabled={fruitCount === 0} // Je kunt niet lager gaan qua aantal dan 0, daarom is de knop dan disable.
            clickHandler={() => setFruitCount(fruitCount - 1)} // Elke druk op de knop verlaagt het aantal
            >
             -
        </Button>
          <p>{fruitCount}</p> {/* Geeft steeds het huidige aantal weer*/}
        <Button
            type="button"
            clickHandler={() => setFruitCount(fruitCount + 1)} // Elke druk op de knop verhoogt het aantal
            >
            +
        </Button>
      </>
   );
}

export default Counter;