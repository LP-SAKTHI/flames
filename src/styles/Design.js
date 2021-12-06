import styled from 'styled-components'

export const Wrapper = styled.div `
    
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:5rem;
    font-weight: bold;
    line-height: 3rem;
    font-size: 1rem;
    text-align: center;
    

    .yourname , .hishername{
        border-radius: 40px;
        height: 40px;
        border:1px solid #000;
        padding-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
    }
    .calculate,.reset{
        
        padding:20px;
        border-radius:4rem;
        border:1px solid #000;
        cursor:pointer;
        margin-left: 30px;
        margin-right: 30px;
        font-size:1rem;
        background-color: #ffc0f5;
    }
    
    .calculate:hover 
    {
        box-shadow: 3px 3px 5px #e22b2b2e ,2px 2px 6px #dd186a;
    }

    .reset:hover{
        box-shadow: 3px 3px 5px #e22b2b2e ,2px 2px 6px #dd186a;
    }

    .buttons
    {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        padding:5rem;
    }
    h1
    {
        padding-bottom: 16px;
        text-shadow: 3px 3px 4px violet, 3px 4px 4px red ;
    }
    
    .resultdiv
    {
    
        height: 70px;
        font-weight: bold;
        border-radius: 20px;
        text-shadow:3px 3px 4px violet, 3px 4px 4px red ;
        
    }
    
    @media only screen and (max-width:320px){
        body{
            margin:auto;
        }
    }
`
