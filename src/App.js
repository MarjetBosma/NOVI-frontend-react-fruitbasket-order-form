import React, { useState } from 'react';
import './App.css';

function App() {
    const [strawberries, setStrawberries] = useState[0];
    const [bananas, setBananas] = useState[0];
    const [apples, setApples] = useState[0];
    const [kiwis, setKiwis] = useState[0];

    function resetFruits() {  // Deze functie hoort bij de resetknop onderaan
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className={fruitChoices}>
          <article>
              <h2>🍓 Aardbeien</h2>
              <button
                  type="button"
                  disabled={strawberries === 0}  // Je kunt niet lager gaan qua aantal dan 0, daarom is de knop dan disabled.
                  onClick{() => setStrawberries(strawberries - 1)} // Elke druk op de knop verlaagt het aantal.
              >
                  -
              </button>
              <p>{strawberries}</p>
              {/* Geeft steeds het huidige aantal weer*/}
              <button
                  type="button"
                  onClick{() => setStrawberries(strawberries + 1)} // Elke druk op de knop verhoogt het aantal.
              >
                  +
              </button>
          </article>
          <article>
              <h2> 🍌 Bananen</h2>
              <button
                  type="button"
                  disabled={bananas === 0}
                  onClick{() => setBananas(bananas - 1)}
              >
                  -
              </button>
              <p>{bananas}</p>
              <button
                  type="button"
                  onClick{() => setBananas(bananas + 1)}
              >
                  +
              </button>
          </article>
          <article>
              <h2>🍏 Appels</h2>
              <button
                  type="button"
                  disabled={apples === 0}
                  onClick{() => setApples(apples - 1)}
              >
                  -
              </button>
              <p>{apples}</p>
              <button
                  type="button"
                  onClick{() => setApples(apples + 1)}
              >
                  +
              </button>
          </article>
          <article>
              <h2>🥝 Kiwi's</h2>
              <button
                  type="button"
                  disabled={kiwis === 0}
                  onClick{() => setKiwis(kiwis - 1)}
              >
                  -
              </button>
              <p>{kiwis}</p>
              <button
                  type="button"
                  onClick{() => setKiwis(kiwis + 1)}
              >
                  +
              </button>
          </article>
          <button
                type="button"
                onClick={() => resetFruits()}>
                Reset
          </button>
      </section>
    </>
  );
}

export default App;
