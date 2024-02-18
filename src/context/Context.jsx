import { createContext, useContext, useReducer , useEffect} from "react";
import Reducer from "../reducer/Reducer";

const API = "https://hn.algolia.com/api/v1/search?" ;

const initialState = {

    isLoading : true,  
    query : "HTML",
    nbPages : 0,
    page:0,
    hits:[]
}

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
   
    const getData = async (url) => {

        dispatch({type : "LOADING"}) 

      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        dispatch({type : "GET_STORIES", 

        payload : 
        {
            hits : data.hits,
            nbPages:data.nbPages}});
        }

      catch(error){
        console.log(error)
      }

}

const removePost = (id) => dispatch({type:"REMOVE_POST", payload: id});

const searchPost = (query) => dispatch({type:'SEARCH', payload: query});

const getPrevious = () => {

    dispatch({
        type : 'PREVIOUS'
    })
}

const getNext = () => {

    dispatch({
        type : 'NEXT'
    })
}



useEffect(() => {
    getData (`${API}query=${state.query}&page=${state.page}`);
}, [state.query, state.page])

    return(
        <AppContext.Provider value={{...state , removePost, searchPost, getPrevious, getNext}}>{children}</AppContext.Provider>
    )
}

const  useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppContext, AppProvider, useGlobalContext}