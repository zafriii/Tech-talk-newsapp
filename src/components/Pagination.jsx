import React from 'react'
import { useGlobalContext } from '../context/Context'

function Pagination() {

const {page, nbPages, getPrevious, getNext} = useGlobalContext();

  return (

    <>
    

    <div className="pagination-btn">


            <button className='prev' onClick={() => getPrevious()}>Prev</button>

            <p className='pages'>{page + 1} of {nbPages}</p>

            <button className='next' onClick={() => getNext()}>Next</button>


    </div>



    </>
  )
}

export default Pagination