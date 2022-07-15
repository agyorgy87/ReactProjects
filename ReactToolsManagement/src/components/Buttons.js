import React, {useState} from 'react';
import './Buttons.scss';

export default function Buttons (props) {

    let tools = props.data;
    const[allData, setAllData] = useState(tools);

    const[filterValue, setFilterValue] = useState([])

    const AllTools = (props) => {
        props.setData(allData);
    }

    const Available = (props) => {
        setFilterValue([]);
        const AvailableDataResult = allData.filter(item => item.Quantity !== 0);
        filterValue.push(...AvailableDataResult);
        props.setData(filterValue)
    }

    const Cheapest = (props) => {
        setFilterValue([]);
        const allDataForCheapestValue = allData;
        const theMinPriceOfAllData = allDataForCheapestValue.map(element => element.Price);
        let minValue = Math.min( ...theMinPriceOfAllData);
        let CheapestData = allDataForCheapestValue.filter(item => item.Price === minValue);
        filterValue.push(...CheapestData);
        props.setData(filterValue);
    }

     const MostExpensive  = (props) => {
        setFilterValue([]);
        const allDataForCheapestValue = allData;
        const theMaxPriceOfAllData = allDataForCheapestValue.map(element => element.Price);
        let maxValue = Math.max( ...theMaxPriceOfAllData );
        let MostExpensiveData = allDataForCheapestValue.filter(item => item.Price === maxValue);
        filterValue.push(...MostExpensiveData);
        props.setData(filterValue);
    }

    return(
        <div>
            <header>
                <h3 className="Filter">Filter</h3>
                
            </header>
            <main className="MainButtons">
                <button onClick={() => AllTools(props)} className="ButtonSet">ALL TOOLS</button>
                <button onClick={() => Available(props)} className="ButtonSet">CURRENTLY IN STOCK</button>
                <button onClick={() => Cheapest(props)} className="ButtonSet">CHEAPEST</button>
                <button onClick={() => MostExpensive(props)} className="ButtonSet">MOST EXPENSIVE</button>  
            </main>
        </div>
    )
}