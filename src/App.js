import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/home"
import Bollywood from "./Bollywood/bollywood"
import Article from "./Article/article"
function App()
{
    return(
        <>
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/category/:name" component={Bollywood}/>
        <Route exact path="/main/:id/:name" component={Article}/>
        </BrowserRouter>
        </>
    )
}
export default App