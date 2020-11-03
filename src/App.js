import React from "react";
import firebase from './firebase'
import SpellInput from "./spellInput";

function App() {

  const [spells, setSpells] = React.useState([])
  const [newSpellName, setNewSpellName] = React.useState()

 React.useEffect(
   ()=> {
    const fetchData = async () =>
    {
      const db = firebase.firestore();
      const data = await db.collection("spells").get();
      console.log(data)
      setSpells(data.docs.map( doc => ({
        ...doc.data(),
        id : doc.id,
      }) ))

    }
    fetchData();
   }, []
 )
 const addNewField = () => 
 {
    console.log("clicked")
    const db = firebase.firestore();
    db.collection("spells").add({name : newSpellName})
 }

  return (
    <ul>
      <input value={newSpellName} onChange={ (e) => setNewSpellName(e.target.value) } />
      <button onClick={addNewField} >Create</button>
      {
        spells.map(spells => (
          <li key={spells}>
            <SpellInput spells={spells} />
             </li>
        ))
      }
    </ul>
  );
}

export default App;
