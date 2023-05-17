import React, { useState } from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png"


function App() {

    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('')
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('weekly');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [comment, setComment] = useState('');
    const [agreeToTerms, toggleAgreeToTerms] = useState(false);


    function resetFruits() {  // Deze functie hoort bij de resetknop onderaan
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Voornaam: ${firstName}, 
                     Achternaam: ${lastName}, 
                     Leeftijd: ${age}, 
                     Postcode: ${zipCode}, 
                     Bezorgfrequentie: ${deliveryFrequency},
       
    `);
        console.log(`Fruitmand bestelling - aardbeien: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
    }

  return (
    <>

    <div className="image-wrapper">
        <img src={logo} alt="logo" id="logo"/>
    </div>
    <h1>Fruitmand bezorgservice</h1>
      <section className="fruit-counter">
          <h2>Kies uw fruit</h2>
          <article>
              <h2>🍓 Aardbeien</h2>
              <button
                  className="counter-button"
                  type="button"
                  disabled={strawberries === 0}  // Je kunt niet lager gaan qua aantal dan 0, daarom is de knop dan disabled.
                  onClick={() => setStrawberries(strawberries - 1)} // Elke druk op de knop verlaagt het aantal.
              >
                  -
              </button>
              <p>{strawberries}</p>
              {/* Geeft steeds het huidige aantal weer*/}
              <button
                  className="counter-button"
                  type="button"
                  onClick={() => setStrawberries(strawberries + 1)} // Elke druk op de knop verhoogt het aantal.
              >
                  +
              </button>
          </article>
          <article>
              <h2> 🍌 Bananen</h2>
              <button
                  className="counter-button"
                  type="button"
                  disabled={bananas === 0}
                  onClick={() => setBananas(bananas - 1)}
              >
                  -
              </button>
              <p>{bananas}</p>
              <button
                  className="counter-button"
                  type="button"
                  onClick={() => setBananas(bananas + 1)}
              >
                  +
              </button>
          </article>
          <article>
              <h2>🍏 Appels</h2>
              <button
                  className="counter-button"
                  type="button"
                  disabled={apples === 0}
                  onClick={() => setApples(apples - 1)}
              >
                  -
              </button>
              <p>{apples}</p>
              <button
                  className="counter-button"
                  type="button"
                  onClick={() => setApples(apples + 1)}
              >
                  +
              </button>
          </article>
          <article>
              <h2>🥝 Kiwi's</h2>
              <button
                  className="counter-button"
                  type="button"
                  disabled={kiwis === 0}
                  onClick={() => setKiwis(kiwis - 1)}
              >
                  -
              </button>
              <p>{kiwis}</p>
              <button
                  className="counter-button"
                  type="button"
                  onClick={() => setKiwis(kiwis + 1)}
              >
                  +
              </button>
          </article>
          <button
                className="reset-button"
                type="button"
                onClick={() => resetFruits()}>
                Reset
          </button>
      </section>
      <form onSubmit={handleSubmit}>
          <h2>Vul uw gegevens in</h2>
          <article className="form-field">
              <label htmlFor="first-name-field">Voornaam</label>
                <input
                    type="text"
                    id="first-name-input"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
          </article>
          <article className="form-field">
              <label htmlFor="last-name-field">Achternaam</label>
              <input
                  type="text"
                  id="last-name-input"
                  name="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
              />
          </article>
          <article className="form-field">
              <label htmlFor="age-field">Leeftijd</label>
              <input
                  type="text"
                  id="age-input"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
              />
          </article>
          <article className="form-field">
              <label htmlFor="zip-code-field">Voornaam</label>
              <input
                  type="text"
                  id="zip-code-input"
                  name="zip-code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
              />
          </article>
          <article className="form-field" id="form-field-comment">
              <label htmlFor="comment-field">Opmerking</label>
              <textarea
                  id="comment-field-textarea"
                  name="comment"
                  value={comment}
                  rows="6"
                  cols="48"
                  onChange={(e) => setComment(e.target.value)}
              />
          </article>
          <article className="form-field">
              <label htmlFor="delivery-field">Bezorgfrequentie</label>
                <select
                  id="delivery-field-selector"
                  name="delivery"
                  value={deliveryFrequency}
                  onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                  <option value="weekly">Iedere week</option>
                  <option value="biweekly">Om de week</option>
                  <option value="monthly">Iedere maand</option>
                </select>
          </article>
          <article>
              <input
                type="radio"
                name="timeslot"
                id="timeslot-field-daytime-input"
                value="daytime"
                checked={deliveryTimeslot === "daytime"}
                onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
              />
              <label htmlFor="timeslot-field-daytime">Overdag</label>
              <input
                  type="radio"
                  name="timeslot"
                  id="timeslot-field-evening-input"
                  value="evening"
                  checked={deliveryTimeslot === "evening"}
                  onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
              />
              <label htmlFor="timeslot-field-evening">'s Avonds</label>
          </article>
          <article className="form-field">
              <label htmlFor="agree-to-terms-field"/>
              <input
                  type="checkbox"
                  id="agree-to-terms-checkbox"
                  name="agree-to-terms"
                  checked={agreeToTerms}
                  onChange={(e) => toggleAgreeToTerms(e.target.checked)}
              />
              Ik ga akkoord met de voorwaarden
          </article>
      </form>
    </>
  );
}

export default App;
