import { faFacebook, faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { faSignLanguage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import rd from "../Data/realData"
import NavBar from "../Navbar/navbar"
import "./article.css"

function Article(props)
{
    const [arr,setArr]=useState(0)
    const [cat,setCat]=useState([])
    useEffect(()=>
    {
        const obj=rd.find((item)=>
        {
            return item.id==props.match.params.id
        })
        const updatedArr=rd.filter((item)=>
        {
            if(item.category===props.match.params.name && item.id!=props.match.params.id)
            return item
        })
        setArr(obj)
        setCat(updatedArr.slice(0,3))
    },[props.match.params.id])
    return(
        <>
        {arr===0?console.log(""):
        <>
        <div id="article-navbar"><NavBar/></div>
        <div id="text-container">
            <div id="title-article">{arr.title}</div>
            <div id="author">
                <div id="author-icon">
                <div><img src="/blogapp/user.png" style={{width:"50px",height:"50px",marginRight:"20px"}}/></div>
                <div>
                    <div>dmitry</div>
                    <div>{arr.date}</div>
                </div>
                </div>
                <div id="icons-container">
                    <FontAwesomeIcon className="icons-article" icon={faFacebookSquare}/>
                    <FontAwesomeIcon className="icons-article" icon={faTwitterSquare}/>
                    <FontAwesomeIcon className="icons-article" icon={faInstagramSquare}/>
                    <FontAwesomeIcon className="icons-article" icon={faYoutubeSquare}/>
                </div>
            </div>
            <div><img src={arr.img} alt="image not found" style={{width:"100%",height:"400px"}}/></div>
            <div id="article-main-text">{arr.text}</div>
            <div>
                <div className="border-footer">
                    <div id="outside-boxes">
                    <span className="boxes">React</span>
                    <span className="boxes">Javascript</span>
                    <span className="boxes">Animation</span>
                    </div>
                    <div id="claps">
                    <FontAwesomeIcon icon={faSignLanguage} style={{transform:"rotateY(180deg)",fontSize:"1.6rem",marginRight:"10px"}}/>
                    <span>9.3K claps</span>
                    </div>
                </div>
                <div id="end-user" className="border-footer">
                   <div><img src="/blogapp/user.png" style={{width:"50px",height:"50px",marginRight:"20px"}}/></div> 
                    <div>
                        <div style={{fontSize:"0.9rem"}}>WRITTEN BY</div>
                        <div>dmitry</div>
                        <div>{arr.date}</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="outside-more-reads">
        <div id="more-reads">
            <div id="more-siren">More From The Siren</div>
            <div id="related-reads">
                {
                    cat.map((item,index)=>
                    <div className="inside-related-reads" key={index}>
                    <NavLink to={`/main/${item.id}/${item.category}`}>
                    <div className="inside-related-reads-extra">Related reads</div>
                    <div className="inside-related-reads-img"><img src={item.img} style={{width:"100%",height:"250px"}}/></div>
                    <div className="inside-related-reads-title">{item.title}</div>
                    <div className="inside-related-reads-div">
                        <div><img src="/blogapp/user.png"  style={{width:"50px",height:"50px",marginRight:"20px"}}/></div>
                        <div>
                            <div>Dmitry</div>
                            <div>{item.date}</div>
                        </div>
                    </div>
                    </NavLink>
                    </div>
                    )
                }
            </div>
        </div>
        </div>
        </>
        }
        </>
    )
}
export default Article