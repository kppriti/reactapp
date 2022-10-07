import { useState } from "react";

function Getdata(){
    const[name,setname]=useState();
    const[email,setemail]=useState();
    const[password,setpassword]=useState()
    const[data,setdata]=useState([]);

    const btnclick=()=>{
        const obj={
            name:name,
            email:email,
            password:password
        }
        setdata([...data,obj]);    
    }

    const btndelete=(i)=>{
      
        setdata([...data.splice(i,0 ,'')])
       
       }
  
                                    

    return(
        <>
        Name:
        <input type='text'  onChange={(e)=>setname(e.target.value)}></input>
        <br></br>
        Email:
        <input type='text' onChange={(e)=>setemail(e.target.value)}></input>
        <br></br>
        Password:
        <input type='text'  onChange={(e)=>setpassword(e.target.value)}></input>
        <br></br>
        <input type='button' value='submit' onClick={btnclick}></input>
        <table>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>decline</th>
            </tr>
            {
               
                    data.map((item,i) => {
                        return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button onClick={btndelete}>decline</button>
                                
                            </td>
                        </tr>  
                        )  
                    })
                
            }
        </table>

        </>
    );
}
 export default Getdata; 

