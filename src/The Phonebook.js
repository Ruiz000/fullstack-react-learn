import React,{useState,useEffect} from 'react'
import Phonebook from './components/Phonebook' 
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import phoneServer from './services/phoneServer'
import News from './components/News'

const App=()=>{
    const [persons,setPersons] = useState([])
    const [newName,setNewName] = useState('')
    const [newNumber,setNumber]=useState('')
    const [newFilter,setNewFilter]=useState('')
    const [news,setNews]=useState(null)

    // 初始化数据
    const initData=()=>{
        phoneServer.getAll().then(response=>{
        setPersons(response)
        })
    }
    useEffect(initData,[])
    
    // 获取输入值
    const handleNewName=(e)=>{
        setNewName(e.target.value)
    }
    const handleNewNum=(e)=>{
        setNumber(e.target.value)
    }
    const handleNewFilter=(e)=>{
        setNewFilter(e.target.value.toLowerCase())
    }
    // 过滤
    const Showlist=persons.filter(item=>item.name.toLowerCase().includes(newFilter))
    
    // 新加
    const handleSubmit=(e)=>{
        e.preventDefault();
        // 检查是否存在 对象
        if(persons.some(item=>item.name === newName))
        {
            
            if(window.confirm(`${newName} is already added to phonebook,replace the old number with anew one?`)){
                const person=persons.find(item=>item.name === newName)
                const id=person.id
                const changePerson={...person,number:newNumber}
                
                phoneServer.update(id,changePerson)
                .then(response => {
                    setNews('Changed '+newName)
                    setTimeout(()=>{
                    setNews(null)
                    },5000)
                    setPersons(persons.map(item=>item.id !==id?item:response))
                    setNewName('')
                    setNumber('')
                })
                return
            }
        }

        // 新加对象
        const newObj={
            name:newName,
            number:newNumber,
            id:persons[persons.length-1].id+1
        }

        phoneServer.create(newObj).then(response=>{
            setNews('Added '+newName)
            setTimeout(()=>{
                setNews(null)
            },5000)
            setPersons(persons.concat(response))
            setNewName('')
            setNumber('')
        })
    }

    // 删除
    const deleteItem=(id)=>{
        if(window.confirm('Delete Arto Hellas?')){
            phoneServer.del(id) 
            const new_persons=persons.filter(item=>item.id!==id)
            setPersons(new_persons)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <News news={news}></News>
            <Filter newFilter={newFilter} handleNewFilter={handleNewFilter}/>
            <PersonForm 
            handleSubmit={handleSubmit} 
            handleNewName={handleNewName}
            handleNewNum={handleNewNum}
            newName={newName}
            newNumber={newNumber}/>
            <h3>Numbers</h3>
            <div>
                {Showlist.map((person,index)=> <Phonebook key={index} person={person} deleteItem={deleteItem}/>)}
            </div>
        </div>
    )
}

export default App