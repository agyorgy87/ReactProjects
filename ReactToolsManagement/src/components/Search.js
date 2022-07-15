import './Search.scss';
import React, {useRef,useEffect,useState} from 'react';

export default function Search (props) {

    let searchBar = useRef(null);

    useEffect(() => {
        searchBar.current.focus();
    })

    let tools = props.data;
    const[allData, setAllData] = useState(tools);

    const[filterValue, setFilterValue] = useState([])

    const [inputValue, setInputValue] = useState('');

    const SearchButton = (props) => {
        setFilterValue([]);
        const TitleName = allData.filter(element => element.Name.toLowerCase().search(inputValue.toLowerCase()) !== -1);
        filterValue.push(...TitleName);
        props.setData(filterValue);
        
    }   

    return (
        <div>
                <label htmlFor="searchIt" className="searchFor">search it:</label>
            <div className="mainSearch">
                <input 
                placeholder='for example "hammer" '
                className="SearchInput" 
                id="searchIt" 
                name="searchIt" 
                ref={searchBar}
                onChange={event => setInputValue(event.target.value)}
                />
                <button 
                className="searchButton"
                type="button"
                onClick={() => SearchButton(props)}
                >Search
                </button>
            </div>
        </div>
    )
}