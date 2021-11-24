import React,{useState} from 'react'
import Phonebook from './components/Phonebook' 
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


const App=()=>{
    const [persons,setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
    const [newName,setNewName] = useState('')
    const [newNumber,setNumber]=useState('')
    const [newFilter,setNewFilter]=useState('')
    
    const handleNewName=(e)=>{
        setNewName(e.target.value)
    }
    const handleNewNum=(e)=>{
        setNumber(e.target.value)
    }
    const handleNewFilter=(e)=>{
        setNewFilter(e.target.value.toLowerCase())
    }

    const Showlist=persons.filter(item=>item.name.toLowerCase().includes(newFilter))

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(persons.some(item=>item.name === newName))
        {
            alert(`${newName} is already added to phonebook`)
            return
        }
    
    const newobj={name:newName,number:newNumber,id:persons.length+1}
        setPersons(persons.concat([newobj]))
        setNewName('')
        setNumber('')
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} handleNewFilter={handleNewFilter}/>
            <PersonForm 
            handleSubmit={handleSubmit} 
            handleNewName={handleNewName}
            handleNewNum={handleNewNum}
            newName={newName}
            newNumber={newNumber}/>
            <h3>Numbers</h3>
            <div>
                {Showlist.map((person,index)=> <Phonebook key={index} person={person} />)}
            </div>
        </div>
    )
}

export default App