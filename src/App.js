import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Calculator from './components/calculator';
import Game from './components/tik toc toe';
import Getdata from './components/getdata';
// function App() {
//   const[name,setname]= useState('riddhi');
//   const btnclick = () =>{
//     setname("sojitra");
//   }
//   return (
//     <>
//     <h1>{name}</h1>
//     <input type='button' value='click here' onClick={btnclick}></input>
//     </>
//   );
// }

  // function App() {
  //   const [number,setnumber]=useState(0);

  //   const btnclickplus = () =>{
  //     setnumber(number+1);
  //   }
  //   const btnclickminus =() =>{
  //     setnumber(number-1)
  //   }

  //   return(
  //     <>
      
  //     <input type='text' value={number}></input>
  //     <input type='button' value='+' onClick={btnclickplus}/>
  //     <input type='button' value='-' onClick={btnclickminus}/>
  //     </>
  //   );

  // }

  // function App() {
  //   const[number1,setnumber1]= useState(0); 
  //   const[number2,setnumber2]= useState(0); 
  //   const[sum,setsum]=useState("");

  //   const btnclickget = () =>{
  //        setsum(parseInt(number1)+parseInt(number2));
  //   } 
  //   const btnreset = () =>{
  //       setsum(" ");
  //   }
    

  //   return(
  //     <>
  //   <input type='text'onChange={(e)=>{setnumber1(e.target.value)}}></input>
  //   <input type='text'onChange={(e)=>{setnumber2(e.target.value)}}></input>

  //   <br></br>
  //   <input type='button' value='+' onClick={btnclickget}></input>
  //   <input type='button'value='clear' onClick={btnreset}></input>
  //   <br></br>
  //   <input type='text' value={sum}></input>
    
      

  //     </>
  //   );
  // }

  function App (){
   
    return(
      <>
      <div className="App">    
      {/* <Calculator/> */}
      {/* <Game/> */}
      <Getdata/>
      </div>

      </>
    );
}



export default App;
