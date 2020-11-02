import React from "react";
import firebase from './firebase'
import SpellInput from "./spellInput";

function App() {

  const [spells, setSpells] = React.useState([])

 React.useEffect(
   ()=> {
    const fetchData = async () =>
    {
      const db = firebase.firestore();
      const data = await db.collection("spells").get();
      console.log(data)
      setSpells(data.docs.map( doc => doc.data()))

    }
    fetchData();
   }, []
 )

  return (
    <ul>
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
