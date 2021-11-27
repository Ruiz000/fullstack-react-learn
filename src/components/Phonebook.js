import React from "react";

const Phonebook=({person,deleteItem})=>{
    return (
        <p>{person.name} {person.number} {person.id} <button onClick={()=>deleteItem(person.id)}>delete</button></p>
    )
}

export default Phonebook