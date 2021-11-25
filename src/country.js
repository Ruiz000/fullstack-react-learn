import React,{useState,useEffect} from 'react'
import axios from 'axios'

function debounce(fn){
    let timeout = null;
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this,arguments);
        },1000)
    }
}

const App =()=>{
    const [country,SetCountry]=useState([])
    const [filter,SetFilter]=useState('')

    const getCountry=()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            SetCountry(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }
    useEffect(getCountry,[])
    const handleFilter=(e)=>{
        SetFilter(e.target.value.toLowerCase())
    }
    debounce(handleFilter) //防抖

    const filter_arr=country.filter(item => item.name.common.toLowerCase().includes(filter))
    const show=(filter_arr)=>{
        if(filter_arr.length>10)
        { 
            return <p>Too many matches,specify another filter</p> 
        }
        else if(filter_arr.length>1 && filter_arr.length<10)
        { 
            return filter_arr.map((item,index) => <p key={index}>{item.name.common}<button>show</button></p>) 
        }
        else if(filter_arr.length===1){
            const list=[filter_arr[0]['languages']].map(item=>Object.entries(item))
            return <div>
                <h1>{filter_arr[0].name.common}</h1>
                 <p>capital {filter_arr[0].capital[0]}</p>
                 <h2>languages</h2>
                 <ul> 
                    {list[0].map((item,index)=>{return <li key={index}>{item}</li>})}
                 </ul>
                 <img src={filter_arr[0].flags.png} alt='xxx'/>
             </div>
        }
    }
    return(
        <div>
            <p>find countries<input value={filter} onChange={handleFilter}/></p>
            <div>
                {show(filter_arr)}
            </div>
        </div>
    )
}


export default App