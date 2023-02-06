import { useCallback,useEffect,useRef } from 'react';
import searchLogo from '/search.svg'
import React from 'react';
import './search.scss'

const Search =({searchText,setSearchText})=>{

    const inputRef = useRef(null);

    const debounce=(cb,delay=500)=>{
        let time;
        return function(...args){
            if(time) clearTimeout(time);

            time = setTimeout(()=>{
              cb(...args);
            },delay);

        }
    }
    
    const handleOnChange = (e) =>{
        setSearchText(e.target.value)
    }
    const optimizedOnChange = useCallback(debounce(handleOnChange),[handleOnChange]) ;
    
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return (
        <div className='searchWrapper'>
            <div className='search'>
            <img src={searchLogo} />
            <input 
                type='text'
                placeholder='Search Tasks...'
                //onChange={optimizedOnChange}
                onChange={handleOnChange}
                value={searchText}
                ref={inputRef}
              />  
        </div>
        </div>
        
    )
}
export default Search