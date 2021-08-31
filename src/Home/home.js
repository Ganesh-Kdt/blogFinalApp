import React, { useState } from "react"
import "./home.css"
import TopPosts from "../TopPosts/topPosts"
import NavBar from "../Navbar/navbar"
import la from "../Data/la"
import laf from "../Data/laf"
import lah from "../Data/lah"
import fa2 from "../Data/fa2"
import rd from "../Data/realData"
import { NavLink } from "react-router-dom"
function Home()
{
    const [arr,setArr]=useState(fa2[0])
    function handleFeaturedArticle(i)
    {
        const arr2=fa2.filter((item,index)=>
        {
            return i===index
        })
        setArr(arr2[0])
    }
    return(
        <>
        <div id="home">
        <NavBar></NavBar>
        
            <div id="featured-articles" className="main-spacing">
                <div id="article1">
                    <NavLink to={`/main/${fa2[0].id}/${fa2[0].category}`}>
                    <div id="article1-text">
                        <div>{fa2[0].title}</div>
                        <div>{`${fa2[0].date} / ${fa2[0].category}`}</div>
                    </div>
                    <img className="img" style={{width:"100%",height:"300px"}} src={fa2[0].img} alt="image not found"/>
                    </NavLink>
                </div>
                <div id="article23">
                    <div className="article23-text">
                        <NavLink to={`/main/${fa2[1].id}/${fa2[1].category}`}>
                        <div className="text">
                            <div>{fa2[1].title}</div>
                            <div>{`${fa2[1].date} / ${fa2[1].category}`}</div>
                        </div>
                        <img className="img"  style={{width:"100%",height:"145px"}} src={fa2[1].img} alt="image not found"/>
                        </NavLink>
                    </div>
                    <div className="article23-text">
                        <NavLink to={`/main/${fa2[2].id}/${fa2[2].category}`}>
                        <div className="text">
                            <div>{fa2[2].title}</div>
                            <div>{`${fa2[2].date} / ${fa2[2].category}`}</div>
                        </div>
                        <img className="img"  style={{width:"100%",height:"145px"}} src={fa2[2].img} alt="image not found"/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="featured-article2">
                <NavLink to={`/main/${arr.id}/${arr.category}`}>
                <div className="featured-article2-text1">{arr.title}</div>
                </NavLink>
                <div className="featured-article2-text2">{arr.date}</div>
                <div className="featured-article2-text3">
                    <i className="fas fa-circle  fa-xs" onClick={()=>handleFeaturedArticle(0)} style={{opacity:"0.5",marginRight:"5px"}}></i>
                    <i className="fas fa-circle  fa-xs" onClick={()=>handleFeaturedArticle(1)} style={{opacity:"0.5",marginRight:"5px"}}></i>
                    <i className="fas fa-circle  fa-xs" onClick={()=>handleFeaturedArticle(2)} style={{opacity:"0.5"}}></i>
                </div>
                <div>
                    <img style={{width:"100%",height:"251px"}} src={arr.img}/>
                </div>
            </div>
            <div id="latest-articles" className="main-spacing">
            <div ><span className="title">The Latest</span></div>
            <div id="latest-articles3">
                {la.map((item,index)=>
                {
                    return(
                        
                        <div className="la3 la3-spacing" key={index}>
                        <NavLink to={`/main/${item.id}/${item.category}`}>
                        <div className="la-image">
                        <img style={{borderTopLeftRadius:"5px",borderTopRightRadius:"5px",width:"100%",height:"251px"}} src={item.img}/>
                        </div>
                        <div className="la-width" style={{textAlign:"left",fontWeight:"600",fontSize:"1.5rem"}}>{item.title}</div>
                        <div className="la-width">{item.pre}</div>
                        <div className="la-width" style={{fontWeight:"500",marginBottom:"15px"}}>{item.date}</div>
                        </NavLink>
                        </div>
                    )
                })
                }
            </div>
            </div>
            <div className="main-spacing">
                <div ><span className="title">Latest Articles</span></div>
                <div id="c1">
                    <div id="c1-main">
                        {
                            lah.map((item,index)=>
                            {
                                return(
                                <NavLink to={`/main/${item.id}/${item.category}`} key={index}>
                                <div className="inside-c1-main c1-top">
                                    <div className="inside-c1-main-img">
                                        <img src={item.img} style={{width:"100%",height:"251px"}}/>
                                    </div>
                                    <div className="inside-c1-main-text">
                                        <div className="c1-spacing inside-c1-main-text-title">{item.title}</div>
                                        <div className="c1-spacing inside-c1-main-text-text">{item.pre}</div>
                                        <div className="c1-spacing inside-c1-main-text-date">{item.date}</div>
                                    </div>
                                </div>
                                </NavLink>
                                )
                            })
                        }
                    </div>
                    <div id="c1-side" style={{fontWeight:"600",fontSize:"1.5rem",textAlign:"center",position:"relative"}}>
                        <div style={{position:"absolute",top:"50%",left:"25%"}}>Advertisement</div>
                    </div>
                </div>
                <div className="load-more">
                    <NavLink to={`/category/Hollywood`}>
                    <span>Load More </span>
                    </NavLink>
                    <i className="fa fa-arrow-right" color="red" aria-hidden="true"></i>
                </div>
            </div>
            <div id="top-posts" className="main-spacing">
                <div id="top-posts-img">
                    <NavLink to={`/main/${rd[6].id}/${rd[6].category}`}>
                    <div id="top-posts-img-title">
                        <div>{rd[6].title}</div>
                        <div id="top-posts-img-title-id">{`${rd[6].category} / ${rd[6].date}`}</div>
                    </div>
                    <img style={{width:"100%"}} src={rd[6].img}/>
                    </NavLink>
                </div>
                <div id="top-posts-main"><TopPosts></TopPosts></div>
            </div>
            <div className="main-spacing">
                <div ><span className="title">Latest Stories</span></div>
                <div className="footer">
                    {
                        laf.map((item,index)=>
                        <div className="inside-footer" key={index}>
                             <NavLink to={`/main/${item.id}/${item.category}`}>
                            <div className="footer-spacing footer-title">{item.title}</div>
                            <div className="footer-spacing footer-text">{item.pre}</div>
                            <div className="footer-spacing footer-date">{item.date}</div>
                            </NavLink>
                        </div>
                        )
                    }  
                </div>
                <div className="load-more">
                    <NavLink to={`/category/Food`}>
                    <span>View More </span>
                    </NavLink>
                    <i className="fa fa-arrow-right" color="red" aria-hidden="true"></i>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Home