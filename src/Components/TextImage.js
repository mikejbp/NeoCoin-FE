import React from "react"
import "../CSS/TextImage.css"


export default function TextImage(props) {
    const isImgLeft = props.isImgLeft
    const button = props.button
    return (
        <>
            {isImgLeft ? 
            <div className="textImage textImage--imgLeft">
                <img src={props.img} alt="Something Something" className="textImage--img"/>
                <div className="textImage--textButton">
                    <h1 className="textImage--text">{props.text}</h1> 
                    {button && <button type="button" className="textImage--button"><a href={props.link}>{props.button}</a></button>}
                </div>
            </div>
            :
            <div className="textImage textImage--imgRight">
                <div className="textImage--textButton">
                    <h1 className="textImage--text">{props.text}</h1> 
                    {button && <button type="button" className="textImage--button"><a href={props.link}>{props.button}</a></button>}
                </div>
                <img src={props.img} alt="Something Something" className="textImage--img"/>
            </div>
            }
        </>
    )
}
