import React, { useEffect, useState } from "react"
import NavBar from "../Navbar/navbar"
import TopPosts from "../TopPosts/topPosts"
import "./bollywood.css"
import la from "../Data/la"
import rd from "../Data/realData"
import { NavLink } from "react-router-dom"
function Bollywood(props)
{
    const [title,setTilte]=useState(0)
    const [arr,setArr]=useState([])
    useEffect(()=>
    {
        const updatearr=rd.filter((item)=>
        {
            if(item.category===props.match.params.name)
            return item
        })
        setArr(updatearr)
        setTilte(props.match.params.name)
    },[props.match.params.name])
    return(
        <>
        {title===0?console.log(""):
        <div id="bollywood">
        <NavBar></NavBar>
        <div id="bollywood-main">
            <div className="inside-bolly-main">
                <div className="bolly-title">{title}</div>
                <div>
                    {
                        arr.map((item,index)=>
                            <NavLink to={`/main/${item.id}/${item.category}`} key={index}>
                            <div className="inside-bolly">
                                <div className="inside-bolly-img">
                                    <img src={item.img} style={{width:"100%",height:"200px"}}/>
                                </div>
                                <div className="inside-bolly-para">
                                    <div className="inside-bolly-title">{item.title}</div>
                                    <div className="inside-bolly-text">{item.pre}</div>
                                    <div className="inside-bolly-date">{item.date}</div>
                                </div>
                            </div>
                            </NavLink>
                        )
                    }
                </div>
            </div>
            <div id="bolly-top-posts">
                <TopPosts></TopPosts>
                <div id="bolly-ad">
                <div id="bolly-ad-title">Advertisement</div>
            </div>
            </div>
        </div>
        </div>
        }
        </>
    )
}
export default Bollywood