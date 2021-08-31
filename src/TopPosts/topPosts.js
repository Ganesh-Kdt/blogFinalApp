import React from "react"
import "./topPosts.css"
import tp from "../Data/tp"
import rd from "../Data/realData"
import { NavLink } from "react-router-dom"
function TopPosts()
{
    return(
        <>
            <div><span className="title">Top Posts</span></div>
                <div>
                    <NavLink to={`/main/${rd[11].id}/${rd[11].category}`}>
                    <div><img style={{width:"100%",height:"251px"}} src={rd[11].img}/></div>
                    <div id="top-posts-1">
                        <div id="top-posts-1-text">
                            <div style={{fontWeight:"500",marginBottom:"10px"}}></div>
                            <div>{`${rd[11].category} / ${rd[11].date}`}</div>
                            </div>
                            <div id="top-posts-1-number">1</div>
                        </div>
                    </NavLink>    
                </div>
                    <div>
                        {
                            tp.map((item,index)=>
                            <NavLink to={`/main/${item.id}/${item.category}`} key={index}>
                            <div className="inside-top-posts-main" key={index}>
                                <div className="inside-top-posts-main-img" >
                                    <img style={{width:"100%",height:"100%"}} src={item.img}/>
                                </div>
                                <div className="inside-top-posts-main-text">
                                    <div style={{fontWeight:"500",marginBottom:"10px"}}>{item.title}</div>
                                    <div>{item.date}</div>
                                </div>
                                <div className="inside-top-posts-main-number">{index+2}</div>
                            </div>
                            </NavLink>
                        )}
                    </div>
        </>
    )
}
export default TopPosts