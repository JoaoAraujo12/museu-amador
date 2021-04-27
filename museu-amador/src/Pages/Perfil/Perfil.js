import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Perfil(){
    const history = useHistory();

    return(
        <div>
            <h1>Perfil</h1>
            <button
                onClick={()=>{
                    history.push ("Home");
                }}
                >Home</button>
                <br />

            <button
                onClick={()=>{
                    history.push ("Pintura");
                }}
                >Pintura</button>
                <br />

            <button
                onClick={()=>{
                    history.push ("Maiscomentadas");
                }}
                >Mais Comentadas</button>
                <br />

            <button
                onClick={()=>{
                    history.push ("Cadastro");
                }}
                >Cadastro</button>
                <br />

            <button
                onClick={()=>{
                    history.push ("Login");
                }}
                >Login</button>
                <br />

            <button
                onClick={()=>{
                    history.push ("Perfil");
                }}
                >Perfil</button>
                <br />
            
            <button
                onClick={()=>{
                history.push ("Footer");
                }}
               >Footer</button>
               <br />
               
        </div>
           
        );
}
export default Perfil;