import { useState } from "react/cjs/react.development"
import Design from "./components/Design"


function App() {

  const [yourName,setYourName] = useState("")
  const [hisherName,sethisherName] = useState("")

  // console.log(yourName)
  // console.log(hisherName)

  const splitArray = (yourName,hisherName) => {
    if(yourName === null || hisherName === null)
    {
      console.log("Enter Both Names!")
    }
    else{
      const yourNameSplit = yourName.split("")
      const hisherNameSplit = hisherName.split("")
      return [yourNameSplit,hisherNameSplit]
      
    }
    
  }

    const getRemainder = (splitname,name) =>{

      splitname.map(item =>{
        const regex = new RegExp(`${item}`,"i")
        name = name.replace(regex,"")
        
      })
      //console.log(name)
      return [splitname,name]
    }


  const getCount = (yourRemainder,hisherRemainder) =>{

    const totalwords = yourRemainder + hisherRemainder;
    // console.log(totalwords);
    const totalCount = totalwords.length;
    //console.log(totalCount)
  }
  
  const getResult = (result,setCount) =>
  {
    if(yourName === true && hisherName === true)
    {
      for(let i = 6 ; i > 1 ; i--)
    {
      result.splice((setCount)%i,1)
      console.log(result)
      console.log((setCount),result.length)

      if((setCount-1)%i < result.length || (setCount !== 0) )
      {
        let resultPart = result.splice((setCount)%i,)
        result = [...resultPart,...result]
        console.log(result)
      }
    }
    }
    
  }

  
    const result = ['Friend','Lover','Affectionate','Marriage','Enemy','Sibling']
    //console.log(result)

    const splitnames = splitArray(yourName,hisherName) 
    //console.log(splitnames);
    

    const yourRemainder = getRemainder(splitnames[1],yourName)
    const hisherRemainder = getRemainder(splitnames[0],hisherName)
    // console.log(yourRemainder)
    // console.log(hisherRemainder)
    const setCount = getCount(yourRemainder[1],hisherRemainder[1])
    const setResult = getResult(result,setCount)
        // console.log(setResult)

    //console.log(splitnames[1]);
    
  








  return (
    <>
        <Design></Design>
        <label>Enter your name:</label>
        <input  className = "yourname" onChange={event => setYourName(event.target.value)} />
        <label>Enter his/her Name</label>
        <input className = "hishername" onChange = {event => sethisherName(event.target.value) }/>
        <button className = "calculate">Calculate</button>
        <button className = "reset">Reset</button>   
        <div className ="resultdiv"></div>
      </>
  )
  
    }


export default App