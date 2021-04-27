import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Login.css"

function Login(){
   // const history = useHistory();

    return(
        // essa div vai ser para ter os botões na parte de cima!!
        /*
        <div>
            
            <button
                onClick={()=>{
                    history.push ("Home");
                }}
                >Home</button>
                

            <button
                onClick={()=>{
                    history.push ("Pintura");
                }}
                >Pintura</button>
                

            <button
                onClick={()=>{
                    history.push ("Maiscomentadas");
                }}
                >Mais Comentadas</button>
                

            <button
                onClick={()=>{
                    history.push ("Cadastro");
                }}
                >Cadastro</button>
                

            <button
                onClick={()=>{
                    history.push ("Login");
                }}
                >Login</button>
                

            <button
                onClick={()=>{
                    history.push ("Perfil");
                }}
                >Perfil</button>
                
            
            <button
                onClick={()=>{
                history.push ("Footer");
                }}
               >Footer</button>
               
               
        </div>
        */
       <div classname="container">
           <img src="/images/nome.png" alt="DIGITAL ART"/>
           <br />
           <input></input>
           <input></input>
           <button>Login</button> 
       </div>
        

        );
}

export default Login;