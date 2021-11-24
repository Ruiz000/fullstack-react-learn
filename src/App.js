import React,{useState} from 'react'

const Display=(props) => {
  return (
    <div>{props.counter}</div>
  )
}


const Button = (props) =>{
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const [counter,setCounter] = useState(0)

  //Event handling
  // const handleClick = ()=>{
  //   console.log('clicked')
  // }
  const increaseByOne = () =>setCounter(counter+1)
  const decreaseByOne = ()=>setCounter(counter - 1)
  const setToZero =()=> setCounter(0)


  // State Hook
  // setTimeout(
  //   ()=>setCounter(counter+1),
  //   1000
  // )

  console.log('rendering...',counter)
  return (
    <>
    <Display counter={counter}></Display>
    <Button onClick={increaseByOne} text={'plus'}>
    </Button>
    <Button onClick={decreaseByOne} text={'minus'}>
    </Button>
    <Button onClick={setToZero} text={'zero'}/>
    </>
  )
}
  
export default App;
