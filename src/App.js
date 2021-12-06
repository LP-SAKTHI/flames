import { useState } from "react/cjs/react.development"
import {Wrapper} from './styles/Design'


function App() {

  let x1,x2;
  const [yourName,setYourName] = useState("")
  const [hisherName,sethisherName] = useState("")

  const flames = () =>
  {
    const result = ['Friend','Lover','Affectionate','Marriage','Enemy','Sibling']
    //console.log(result)
    if(yourName === "" || hisherName === "")
    {
      document.querySelector(".resultdiv").innerHTML = "Enter both names!....";
    }
    
    else if(yourName !== "" || hisherName !== "")
    {
    //console.log(splitnames);
    const splitnames = splitArray(yourName,hisherName) 
    const yourRemainder = getRemainder(splitnames[1],x1)
    const hisherRemainder = getRemainder(splitnames[0],x2)
    // console.log(yourRemainder)
    // console.log(hisherRemainder)
    const setCount = getCount(yourRemainder[1],hisherRemainder[1])
    console.log(setCount)
    const setResult = getResult(result,setCount)
    document.querySelector(".resultdiv").innerHTML = `Relationship between ${yourName} and ${hisherName} is ${setResult}`;
    
    
    
    }
    
    
  }
  
  const splitArray = (yourName,hisherName) => {
    if(yourName === "" || hisherName === "")
    {
      console.log("Enter Both Names!")
      
    }
    else{
      
      x1 = yourName.split('.').join("").replace(/ /g,'')
      console.log(x1)
      x2 = hisherName.split('.').join("").replace(/ /g,'') 
      console.log(x2);
      const yourNameSplit = x1.split("")
      const hisherNameSplit = x2.split("")
      return [yourNameSplit,hisherNameSplit]
      
    }
    
  }

    const getRemainder = (splitname,name) =>{
      // eslint-disable-next-line
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
    return totalCount
    //console.log(totalCount)
  }
  
  const getResult = (result,setCount,resultPart) =>
  {
    
      for(let i = 6 ; i > 1 ; i--)
    {
      result.splice((setCount-1)%i,1)
      //console.log(result)
      // console.log((setCount),result.length)

      if((setCount-1)%i < result.length-1 || (setCount-1 !== 0) )
      {
        resultPart = result.splice((setCount-1)%i,)
        result = [...resultPart,...result]
        console.log(result)
      }
    }
    
  
    
    return [result]
    }


  return (
    <Wrapper>
      <h1 className = "heading">♥ FLAMES ♥</h1>
      <div className ="inputs">
      <label className = "yourNameLabel">Enter your name:</label>
        <input className = "yourname" onChange ={event => setYourName(event.target.value)} required/>
      </div>

      <div className ="inputs2">
        <label className = "hisherLabel">Enter his/her Name:</label>
        <input className = "hishername" onChange = {event => sethisherName(event.target.value) } required/>
      </div>
        
        <div className = "buttons">
        <button className = "calculate" onClick = {()=>{flames()}}>Calculate</button>
        <button className = "reset" onClick = {()=>{window.location.reload()}}>Reset</button>   
        </div>
        
        <div className ="resultdiv"></div>
      </Wrapper>
  )
  
    }

  
export default App