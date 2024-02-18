import React from 'react'
import { useGlobalContext } from '../context/Context'

function Search() {


const {query, searchPost} = useGlobalContext();

  return (


    <>
    
   <form onSubmit={(e) => e.preventDefault()}>
    
    
    <div  className="search">

          <input
          
          type='text'
          placeholder='search here...'
          value={query}
          onChange={(e) => searchPost(e.target.value)} />
                 
                                                            
    </div>
    
   </form>   


    </>
  )
}

export default Search