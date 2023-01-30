import searchLogo from '../../public/search.svg'

import './search.scss'
const Search =()=>{
    return (
        <div className='searchWrapper'>
            <div className='search'>
            <img src={searchLogo} />
            <input type='text' placeholder='Search Tasks...' />    
        </div>
        </div>
        
    )
}
export default Search