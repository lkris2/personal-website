import {useState} from "react";
import { useEffect } from "react";
import "../style/Carousel.css";
function Carousel({images}) {
    const [current,setCurrent] = useState(0);
    const [autoPlay,setAutoPlay] = useState(true);
    let timeOut = null
    
    useEffect(()=>{
        timeOut = autoPlay && setTimeout(()=>
        {slideRight();
        },2500);
    });
    const slideRight = () =>{
        setCurrent(current===images.length-1? 0: current+1);
    };
    const slideLeft = () => {
        setCurrent(current=== 0 ? images.length-1: current-1);
    };
    return(
    <div className = "carousel" on MouseEnter={()=>{setAutoPlay(false)
     clearTimeout(timeOut);}} onMouseLeave={()=>{setAutoPlay(true)}}>;
    <div className = "carousel_wrapper">
    {images.map((image,index)=>{
            return (<div key = {index} className = {index==current ? "carousel_card carousel_card-active" : "carousel_card"}>
                <img src = {image.image} alt = "" className = "pics"/>
                <div className = "card_overlay">
                    <h2 className = "card_title">{image.title}</h2>
            </div>
            </div>
            );
        })}
         <div className = "carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
        <div className = "carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
        
     </div>
     </div>
    );
    }
   
 
export default Carousel;
