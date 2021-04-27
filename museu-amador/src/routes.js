import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Cadastro from "./Pages/Cadastro"
import Footer from "./Pages/Footer"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Maiscomentadas from "./Pages/Maiscomentadas"
import Perfil from "./Pages/Perfil"
import Pintura from "./Pages/Pintura"

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/home" component = {Home}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                <Route path = "/footer" component = {Footer}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/maiscomentadas" component = {Maiscomentadas}/>
                <Route path = "/perfil" component = {Perfil}/>
                <Route path = "/pintura" component = {Pintura}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
