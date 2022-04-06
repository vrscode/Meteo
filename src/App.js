import React, { useState } from "react"; 
const key = "f04e4861f9d06f8e95c694e59c28cac4"; 


export default function App() {    
  const [ville, setVille] = useState("");   
  const [result, setResult] = useState({});   
  const getMeteo = async (e) => {    
     e.preventDefault();     
     if (!ville) {       
       return;     
      }     
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q={ville}&appid={key}');     
      const { main } = await response.json();   
        setResult(main);   
        };   
        return (     
        <div>       
          <form onSubmit={getMeteo}>         
            <div>           
              <label>ville</label>          
              <input value={ville} onChange={(e) => setVille(e.target.value)}  class="form-control" /> 
            </div>         
            <button type="submit" className="btn btn-success">valider</button>       
            </form>      
            {result && (         
              <div>          
                <p>température: {result.temp}</p>
              </div>
            )}
            </div>
        );
        }