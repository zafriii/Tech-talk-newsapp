import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/Context'

function News() {

  
const {hits, isLoading, removePost} = useGlobalContext();



if(isLoading)
    return <p className='loader'>Loading...</p>;


  return (

    <>

    <div className="news-container" >
    
    {

        hits.map((curElem) => {

            const {title, author,  objectID, url, num_comments } = curElem;

            return <>

            <div className="card-container" key={objectID}>

            <h2>{title}</h2>

            <p>By <span>{author}</span> | <span className='cmnts'>{num_comments} comments</span></p>

            <div className='card-btn'>

            <div className="link"> <a href={url} target="_blank">Read More</a> </div>
              
            <div className="rmv"> <a href ="#" onClick={() =>removePost(objectID)}>Remove</a> </div>

            </div>

            </div>
            
            </>
            
        })


    }

    </div>
    
    </>
  )
}

export default News