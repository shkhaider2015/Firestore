import React from "react";
import firebase from './firebase'
import SpellInput from "./spellInput";
import HomeApp from "./Components/myApp";

function App() {

  const [spells, setSpells] = React.useState([])
  const [newSpellName, setNewSpellName] = React.useState()

  React.useEffect(
    () => {

        const db = firebase.firestore();
        return db.collection("spells").onSnapshot( snapShot => {
          const spellsData = [];
          snapShot.forEach( doc => spellsData.push({
            ...doc.data(),
            id : doc.id
          }) );
          setSpells(spellsData)
        } )
        

    }, []
  )
  const addNewField = () => {
    console.log("clicked")
    const db = firebase.firestore();
    db.collection("spells").add({ name: newSpellName })
  }

  return (
    <div>
      <HomeApp />
      <ul>
      
      <input value={newSpellName} onChange={(e) => setNewSpellName(e.target.value)} />
      <button onClick={addNewField} >Create</button>
      {
        spells.map(spells => (
          <li key={spells}>
            <SpellInput spells={spells} />
          </li>
        ))
      }
    </ul>
    </div>
  );
}

export default App;
