import { clear } from "@testing-library/user-event/dist/clear";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function Calculator(){
    const [number,setnumber]=useState('');
    const [sign,setsign] = useState();
    const [total,settotal]=useState("");

    const clear=()=> {
    setnumber(" ");
  }
    // const calc=()=>{
      
    // }

    const answer=(a)=>{
      var y = number;
      if(sign=="+")
      {
        settotal(parseInt(total)+parseInt(y))
      }
      if(sign=='-')
      {
        settotal(parseInt(total)+parseInt(y))
      }
    
    }


    return(
      <>
      <div className="App"  >   
      <input type='text'value={number} ></input><br></br> 
        <input type='button' value='1' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='2' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='3' onClick={(e)=>{setnumber (number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='4' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='5' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='6' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='7' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='8' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='9' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='0' onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='+' onClick={(e)=>cal('')}></input>
        <input type='button' value='-' ></input>
        <input type='button' value='/'></input>
        <input type='button' value='*' ></input>
        <br></br>
        <input type='button' value='clear' onClick={clear}></input>
        <input type='button' value='=' onclick={answer}></input>
        <input type='button' value='.' onClick={(e)=>{setnumber( e.target.value)}}></input>
        
      </div>

      </>
    )
}
export default Calculator;