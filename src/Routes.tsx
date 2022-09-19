import {Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Card from "./pages/Card";
import Home from "./pages/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <WrapperRoutes>
                <Route path= "/" element= {<Home />}/>
                <Route path= "/card" element= {<Card />}/>
            </WrapperRoutes>
        </BrowserRouter>
    )
}