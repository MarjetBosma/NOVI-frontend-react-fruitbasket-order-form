import React, { useState } from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png"
import Button from "./components/Button";
import Counter from "./components/Counter";
import InputField from "./components/InputField";

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
      <section className="fruit-counter-section">
          <h2>Kies uw fruit</h2>
          <article>
              <h2>🍓 Aardbeien</h2>
              <Counter
                fruitCount={strawberries}
                setFruitCount={setStrawberries}
              />
          </article>
          <article>
              <h2> 🍌 Bananen</h2>
              <Counter
                  fruitCount={bananas}
                  setFruitCount={setBananas}
              />
          </article>
          <article>
              <h2>🍏 Appels</h2>
              <Counter
                  fruitCount={apples}
                  setFruitCount={setApples}
              />
          </article>
          <article>
              <h2>🥝 Kiwi's</h2>
              <Counter
                  fruitCount={kiwis}
                  setFruitCount={setKiwis}
              />
          </article>
          <Button
              className="reset-button"
              type="button"
              clickHandler={resetFruits}
          >
              Reset
          </Button>
      </section>

      <form onSubmit={handleSubmit}>
          <h2>Vul uw gegevens in</h2>
          <article className="form-field">
              <InputField
              type="text"
              name="first-name"
              value={firstName}
              changeHandler={setFirstName}
              label="Voornaam"
              />
          </article>
          <article className="form-field">
              <InputField
                  type="text"
                  name="last-name"
                  value={lastName}
                  changeHandler={setLastName}
                  label="Achternaam"
              />
          </article>
          <article className="form-field">
              <InputField
                  type="number"
                  name="age"
                  value={age}
                  changeHandler={setAge}
                  label="Leeftijd"
              />
          </article>
          <article className="form-field">
          <InputField
              type="text"
              name="zip-code"
              value={zipCode}
              changeHandler={setZipCode}
              label="Postcode"
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
          <Button
              type="submit"
          >
              Verzend
          </Button>
      </form>
    </>
  );
}

export default App;
