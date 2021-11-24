import React,{useState} from 'react'

const StatisticLine = (props)=>{
  
  return (
    <div>
      <p>{props.text} {props.value} {props.text === 'positive'?'%':''}</p>
    </div>
  )
}

const Statistics=(props)=>{
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  if(good !==0 || neutral !== 0 || bad !== 0){
    return (
      <div>
      <StatisticLine text='good' value={good}></StatisticLine>
      <StatisticLine text='neutral' value={neutral}> </StatisticLine>
      <StatisticLine text='bad' value={bad}> </StatisticLine>
      <StatisticLine text='all' value={good+neutral+bad}> </StatisticLine>
      <StatisticLine text='average' value={(good-bad)/(good+neutral+bad)}></StatisticLine>
      <StatisticLine text='positive' value={(good/(good+neutral+bad))*100 }></StatisticLine>
      </div>
    )
  }else{
    return(
      <div>
      <p>No feedback given</p>
      </div>
    )
  }
  
}

const Button =({ handleClick,text})=>{
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const App =()=>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)

  const handleGoodClick=()=>{
    setGood(good+1)
  }

  const handleBadClick=()=>{
    setBad(bad+1)
  }

  const handleNeutralClick=()=>{
    setNeutral(neutral+1)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}></Button>
      <Button handleClick={handleNeutralClick} text={'neutral'}></Button>
      <Button handleClick={handleBadClick} text={'bad'}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;