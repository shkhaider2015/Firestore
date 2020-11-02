import React from "react";

function SpellInput({spells})
{
    return(
        <div>
            <input defaultValue={spells.name} />
            <button>Update</button>
        </div>
    )

}

export default SpellInput;