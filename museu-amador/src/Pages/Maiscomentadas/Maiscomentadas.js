import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Maiscomentadas(){
    const history = useHistory();

    return(
        <div>
            <h1>Mais Comentadas</h1>
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

export default Maiscomentadas;