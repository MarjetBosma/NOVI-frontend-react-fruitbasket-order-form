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

    // Basisopdracht: Losse state initialisaties voor elk invoerveld
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

    // Bonus: conditioneel stylen. Ik wil bereiken dat als mijn button in de fruitcounter (article element) wordt aangeklikt, deze active wordt, en dat dan de rand van het article element rood wordt (is standaard zwart). Hieronder initialiseer ik state hiervoor, en daaronder geef ik een anonieme functie mee aan de variabele handleClick om de status op active te zetten als er geklikt wordt. Zie verder bij de article elementen voor elke fruitsoort.
    // Ik heb de methode op internet gevonden. Helaas werkt het nog niet... :'-(

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true)
    }

    // handleFormChange functie die toetsaanslagen op het hele formulier registreert
    function handleFormChange(e) {
        const changedFieldName = e.target.name; // Object key van de veldnaam in variabele zetten
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
                     Bezorgtijd: ${formState.deliveryTimeslot}
                     Akkoord met voorwaarden: ${formState.agreeToTerms}
       
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
          <article
            className="red-border"
              onClick={handleClick}>
              {/*Conditioneel stylen/ Als er op een button wordt geklikt wordt de anonieme functie bij de handleClick variabele (regel 40) in werking gezet. Helaas werkt het nog niet... :'-( */}
              <h2>🍓 Aardbeien</h2>
              <Counter
                fruitCount={strawberries}
                setFruitCount={setStrawberries}
              />
          </article>
          <article
              className={active ? "red-border" : ""}
              onClick={handleClick}>
              <h2> 🍌 Bananen</h2>
              <Counter
                  fruitCount={bananas}
                  setFruitCount={setBananas}
              />
          </article>
          <article
              className={active ? "red-border" : ""}
              onClick={handleClick}>
              <h2>🍏 Appels</h2>
              <Counter
                  fruitCount={apples}
                  setFruitCount={setApples}
              />
          </article>
          <article
              className={active ? "red-border" : ""}
              onClick={handleClick}>
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
              inputType="text" // Voor bonusopdracht inputType gebruiken i.p.v. type en name, zie handleChangeForm functie.
              inputName="first-name"
              value={formState.firstName} // Voor bonusopdracht formState toevoegen
              // changeHandler={setFirstName} // Basisopdracht
              handleInputChange={(e) =>
                  setFormState({
                      ...formState,
                      firstName: e.target.value
                  })} // Bonusopdracht
              label="Voornaam"
              />
              {/*Opmerking: Ik zou verwachten dat ik voor handleInputChange simpelweg kan verwijzen naar de functie handleFormChange, dus op deze manier: handleInputChange={handleFormChange}. Maar om een of andere reden werkt dat niet. Ik kan dan niets typen of aanklikken in het formulier. Vandaar deze noodoplossing. Mocht je begrijpen wat er misgaat, beste reviewer, dan hoor ik dat graag!*/}
          </article>

          <article className="form-field">
              <InputField
                  type="text"
                  name="last-name"
                  value={formState.lastName}
                  // changeHandler={setLastName} // Basisopdracht
                  handleInputChange={(e) =>
                      setFormState({
                          ...formState,
                          lastName: e.target.value
                      })}
                  label="Achternaam"
              />
              {/*handleInputChange={handleFormChange} werkt hier ook niet.*/}
          </article>

          <article className="form-field">
              <InputField
                  type="number"
                  name="age"
                  value={formState.age}
                  // changeHandler={setAge} // Basisopdracht
                  handleInputChange={(e) =>
                      setFormState({
                          ...formState,
                          age: e.target.value
                      })}
                  label="Leeftijd"
              />
              {/*handleInputChange={handleFormChange} werkt hier ook niet.*/}
          </article>

          <article className="form-field">
              <InputField
                  type="text"
                  name="zip-code"
                  value={formState.zipCode}
                  // changeHandler={setZipCode}  // Basisopdracht
                  handleInputChange={(e) =>
                      setFormState({
                          ...formState,
                          zipCode: e.target.value
                      })}
                  label="Postcode"
              />
              {/*handleInputChange={handleFormChange} werkt hier ook niet.*/}

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
                  onChange={handleFormChange}
              />
              {/*Opmerking: Gek genoeg werkt de verwijzing naar de handleFormChange functie hier wel. Ik kan gewoon in het tekstvak typen en de inhoud wordt ook gelogd.*/}

          </article>
          <article className="form-field">
              <label htmlFor="delivery-field">Bezorgfrequentie</label>
                <select
                  id="delivery-field-selector"
                  name="delivery"
                  value={formState.deliveryFrequency}
                  // onChange={(e) => toggleDeliveryFrequency(e.target.value)} // Basisopdracht
                  onChange={(e) =>
                      setFormState({
                          ...formState,
                          deliveryFrequency: e.target.value
                      })}
                >
                  <option value="weekly">Iedere week</option>
                  <option value="biweekly">Om de week</option>
                  <option value="monthly">Iedere maand</option>
                </select>
              {/*De verwijzing naar de handleFormChange functie, in dit geval onchange={handleFormChange}, werkt hier ook niet. Ik kan dan wel een optie uit het uitklapmenu kiezen, maar de standaardwaarde wordt niet overschreven.*/}
          </article>

          <article>
              <input
                type="radio"
                name="timeslot"
                id="timeslot-field-daytime-input"
                value="daytime"
                checked={formState.deliveryTimeslot === "daytime"}
                // onChange={(e) => toggleDeliveryTimeslot(e.target.value)} // Basisopdracht
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        firstName: e.target.value
                    })}
              />
              {/*De verwijzing naar de handleFormChange functie, in dit geval onchange={handleFormChange}, werkt hier ook niet. Ik kan geen andere optie aanklikken dan de standaardwaarde..*/}
              <label htmlFor="timeslot-field-daytime">Overdag</label>

              <input
                  type="radio"
                  name="timeslot"
                  id="timeslot-field-evening-input"
                  value="evening"
                  checked={formState.deliveryTimeslot === "evening"}
                  // onChange={(e) => toggleDeliveryTimeslot(e.target.value)} // Basisopdracht
                  onChange={(e) =>
                      setFormState({
                          ...formState,
                          deliveryTimeslot: e.target.value
                      })}
              />
              {/*Zie opmerking over de handleFormChange functie hierboven.*/}
              <label htmlFor="timeslot-field-evening">'s Avonds</label>
          </article>

          <article className="form-field">
              <label htmlFor="agree-to-terms-field"/>
              <input
                  type="checkbox"
                  id="agree-to-terms-checkbox"
                  name="agree-to-terms"
                  checked={formState.agreeToTerms}
                  // onChange={(e) => toggleAgreeToTerms(e.target.checked)} // Basisopdracht
                  onChange={(e) =>
                      setFormState({
                          ...formState,
                          agreeToTerms: e.target.checked
                      })}
              />
              {/*De verwijzing naar de handleFormChange functie, in dit geval onchange={handleFormChange}, werkt hier ook niet. Ik kan de checkbox dan niet aanvinken.*/}
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
