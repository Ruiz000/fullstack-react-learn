import React,{ useState } from 'react'

const Most=(props)=>{
    const anecdotes = props.anecdotes
    const points=props.points
    let max_index=0
    let max_value=0
    
    points.forEach((item,index)=>{
        if(max_value<item){
            max_value=item
            max_index=index
        }
    })
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[max_index]}</p>
            <p>has {points[max_index]} votes</p>
        </div>
    )
}


const App = () => {
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
     
    const [selected, setSelected] = useState(0)
    const [points,setPointed]=useState(Array(7).fill(0))

    const handleRandom=()=>{
        setSelected(Math.floor(Math.random()*7))
    }
    const handleVote=()=>{
        const copy=[...points]
        copy[selected] +=1
        setPointed(copy)
    }
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleRandom}>next anecdote</button>

        <Most points={points} anecdotes={anecdotes}/>
      </div>
    )
  }
  
  export default App