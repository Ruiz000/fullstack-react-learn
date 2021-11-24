import React from "react";

const Phonebook=({person})=>{
    
    return (
        <p>{person.name} {person.number} {person.id}</p>
    )
}

export default Phonebook