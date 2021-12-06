import { useState } from "react/cjs/react.development"
import {Wrapper} from './styles/Design'


function App() {

  
let x1,x2;
  //const [values,showvalues] = useState()
  const [yourName,setYourName] = useState("")
  const [hisherName,sethisherName] = useState("")

  
  // console.log(yourName)
  // console.log(hisherName)

  
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



    
  
  const flames = () =>
  {
    const result = ['Friend','Lover','Affectionate','Marriage','Enemy','Sibling']
    //console.log(result)
    
    if(yourName === "" || hisherName === ""){
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
    const setResult = getResult(result,setCount)
    document.querySelector(".resultdiv").innerHTML = `${setResult}`;
    }
    
    //console.log(setResult)
        // console.log(setResult)

    //console.log(splitnames[1]);
    
  }

  return (
    <Wrapper>
      <h1>♥ FLAMES ♥</h1>
        <label className = "yourNameLabel">Enter your name:</label>
        <input className = "yourname" onChange ={event => setYourName(event.target.value)} required/>

        <label className = "hisherLabel">Enter his/her Name</label>
        <input className = "hishername" onChange = {event => sethisherName(event.target.value) } required/>
        <button className = "calculate" onClick = {()=>{flames()}}>Calculate</button>
        <button className = "reset" onClick = {()=>{window.location.reload()}}>Reset</button>   
        <div className ="resultdiv"></div>
      </Wrapper>
  )
  
    }

  
export default App