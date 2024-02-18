const Reducer = (state, action) => {

    switch(action.type){

        case "LOADING":
            return {...state, loading: true};

        case "GET_STORIES": 
            return{
                ...state,
                 isLoading:false,
                 hits: action.payload.hits,
                 nbPages : action.payload.nbPages
                
                };

        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((curElem) => {
                   return curElem.objectID !== action.payload;
                })
            }
            
        case "SEARCH" :
            return{
                ...state,
                query: action.payload
            } 
            
        
        case "NEXT" :

           let pageNum = state.page + 1;

            if(pageNum >= state.nbPages ){
                pageNum = 0;
            }


            return{
                ...state,
                page: pageNum 
            } 
            
            
            case "PREVIOUS" :

                let numPages = state.page;

                if(numPages <=0){
                    numPages = 0;
                }

                 else{
                    numPages = numPages - 1 ;    
                }


                return{
                    ...state,
                    page: numPages 
                }     


    }


    return state;
}

export default Reducer;