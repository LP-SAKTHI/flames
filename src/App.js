import { useState } from "react/cjs/react.development"
import Design from "./components/Design"


function App() {

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
      const yourNameSplit = yourName.split("")
      const hisherNameSplit = hisherName.split("")
      return [yourNameSplit,hisherNameSplit]
      //console.log(yourNameSplit,hisherNameSplit);
    
    }
  }

    // const getRemainder = (splitname,name) =>{

    //   splitname.map(item =>{
    //     const regex = new RegExp(`${item}`,"i")
    //     name = name.replace(regex,"")
        
    //   })
    //   console.log(name)
    //   return [splitname,name]
    // }


  

  
    const result = ['Friend','Lover','Affectionate','Marriage','Enemy','Sibling']
    //console.log(result)

    const splitnames = splitArray(yourName,hisherName) 
    console.log(splitnames);
    

    // const yourRemainder = getRemainder(splitnames,yourName)
    // console.log(yourRemainder)

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