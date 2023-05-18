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

    // Reguliere opdracht: Losse state initialisaties voor elk invoerveld
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [age, setAge] = useState(0);
    // const [zipCode, setZipCode] = useState('')
    // const [deliveryFrequency, toggleDeliveryFrequency] = useState('weekly');
    // const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    // const [comment, setComment] = useState('');
    // const [agreeToTerms, toggleAgreeToTerms] = useState(false);

    // Bonus: State object voor het hele formulier, keys komen overeen met name attributes van de invoervelden
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipCode: '',
        deliveryFrequency: 'weekly',
        deliveryTimeslot: 'daytime',
        comment: '',
        agreeToTerms: false,
    });

    // handleChange functie die toetsaanslagen op het hele formulier registreert
    function handleChangeForm(e) {
        const changedFieldName = e.target.name; // Object key in variable zetten
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        // Bij een checkbox e.target.checked gebruiken, in alle andere gevallen e.target.value.

        setFormState({
            ...formState, // Spread operator, overschrijft alleen de laatste toegevoegde key
            [changedFieldName]: newValue // Blokhaaksyntax om een variabele als object-key te gebruiken.
        })
    }

    function resetFruits() {  // Deze functie hoort bij de resetknop onderaan
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Voornaam: ${formState.firstName}, 
                     Achternaam: ${formState.lastName}, 
                     Leeftijd: ${formState.age}, 
                     Postcode: ${formState.zipCode}, 
                     Bezorgfrequentie: ${formState.deliveryFrequency},
       
    `); // Voor bonusopdracht formState toevoegen voor elke variabele, en formState loggen.
        console.log(formState);
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
              inputType="text" // Voor bonusopdracht inputType gebruiken i.p.v. type en name, zie handleChangeForm functie
              inputName="first-name"
              value={formState.firstName} // Voor bonusopdracht formState toevoegen
              // changeHandler={setFirstName} // Basisopdracht
              changeHandler={handleChangeForm} // Bonusopdracht
              label="Voornaam"
              />
          </article>
          <article className="form-field">
              <InputField
                  type="text"
                  name="last-name"
                  value={formState.lastName}
                  // changeHandler={setLastName}
                  changeHandler={handleChangeForm}
                  label="Achternaam"
              />
          </article>
          <article className="form-field">
              <InputField
                  type="number"
                  name="age"
                  value={formState.age}
                  // changeHandler={setAge}
                  changeHandler={handleChangeForm}
                  label="Leeftijd"
              />
          </article>
          <article className="form-field">
              <InputField
                  type="text"
                  name="zip-code"
                  value={formState.zipCode}
                  // changeHandler={setZipCode}
                  changeHandler={handleChangeForm}
                  label="Postcode"
              />
          </article>
          <article className="form-field" id="form-field-comment">
              <label htmlFor="comment-field" id="comment-field-label">Opmerking</label>
              <textarea
                  id="comment-field-textarea"
                  name="comment"
                  value={formState.comment}
                  rows="6"
                  cols="48"
                  placeholder="Schrijf hier uw opmerking"
                  // onChange={(e) => setComment(e.target.value)}
                  onChange={handleChangeForm}
              />
          </article>
          <article className="form-field">
              <label htmlFor="delivery-field">Bezorgfrequentie</label>
                <select
                  id="delivery-field-selector"
                  name="delivery"
                  value={formState.deliveryFrequency}
                  // onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                  onChange={handleChangeForm}
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
                checked={formState.deliveryTimeslot === "daytime"}
                // onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                onChange={handleChangeForm}
              />
              <label htmlFor="timeslot-field-daytime">Overdag</label>
              <input
                  type="radio"
                  name="timeslot"
                  id="timeslot-field-evening-input"
                  value="evening"
                  checked={formState.deliveryTimeslot === "evening"}
                  // onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                  onChange={handleChangeForm}
              />
              <label htmlFor="timeslot-field-evening">'s Avonds</label>
          </article>
          <article className="form-field">
              <label htmlFor="agree-to-terms-field"/>
              <input
                  type="checkbox"
                  id="agree-to-terms-checkbox"
                  name="agree-to-terms"
                  checked={formState.agreeToTerms}
                  // onChange={(e) => toggleAgreeToTerms(e.target.checked)}
                  onChange={handleChangeForm}
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
