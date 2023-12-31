import React from 'react'
import '../style/Cards.css'
export default function Card({title,imageUrl,body,url}){
    return (
        
            <div className="card">
              <img src={imageUrl} alt={title} />
              <div className="card-content">
                <h2>{title}</h2>
                <p>{body}</p>
                <button ><a href={url}>
                View on GitHub</a></button>
              </div>
            </div>
             
          );
    
}