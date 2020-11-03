import React from "react";
import firebase from './firebase'

function SpellInput({spells})
{
    const [name, setName] = React.useState(spells.name)

    const onUpdate = () => 
    {
        const db = firebase.firestore();
        db.collection("spells").doc(spells.id).set({...spells, name})
    }

    const onDelete = ()=> 
    {
        const db = firebase.firestore();
        db.collection("spells").doc(spells.id).delete()
    }

    return(
        <div>
            <input 
            value={name}
            onChange={e=> {
                setName(e.target.value)
            }}
            />
            <button onClick={onUpdate} >Update</button>
            <button onClick={onDelete} >Delete</button>
        </div>
    )

}

export default SpellInput;