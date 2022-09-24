import React, { useState } from 'react';
import useData from '../Hook/useData';
import SingleChart from './SingleChart';

const Charts = () => {
    const [businessData] = useData();

    
    // Filtering by End year
    const [endYear, setEndyear] = useState();
    const [topic, setTopic] = useState();
    const [region, setRegion] = useState();
    const [sector, setSector] = useState();

    const endYearFilter = businessData.filter(data => data.end_year === parseInt(endYear))
    const years = businessData.filter(data => data.end_year);
    const yearArray = years.map(data => data.end_year);    
    // const uniqueYear = [[...new Set(yearArray)]]; // working but not working for the select
    const uniqueYear = (Array.from(new Set(yearArray))).sort();

    // Filter by topic
    const allTopic = (businessData.filter(data => data.topic)).map(data => data.topic);
    const uniqueTopic = (Array.from(new Set(allTopic))).sort();
    const filterByTopic = businessData.filter(data => data.topic === topic);

    // Filter by Region
    const allRegion = (businessData.filter(data => data.region)).map(data => data.region);
    const uniqueRegion = (Array.from(new Set(allRegion))).sort();
    const filterByRegion = businessData.filter(data => data.region === region);

    // Filter by sector
    const allSector = (businessData.filter(data => data.sector)).map(data => data.sector);
    const uniqueSector = (Array.from(new Set(allSector))).sort();
    const filterBySector = businessData.filter(data => data.sector === sector);

    
    


    // all
    let loadBusinessdata;

    console.log(uniqueTopic)



    return (
        <div>
            <div className='my-5 bg-slate-200 py-3 px-3 rounded-xl'>
                <input className="input select-bordered" placeholder='Search...' onBlur={(e)=> setEndyear(e.target.value)}/>

                <select className='select' onChange={(e)=> setEndyear(e.target.value)}>
                    {
                        uniqueYear.map(data => <option value={data}>{data}</option>)
                    }                    
                </select>

                <select className='select' onChange={(e)=> setTopic(e.target.value)}>
                    {
                        uniqueTopic.map(data => <option value={data}>{data}</option>)
                    }                    
                </select>
                <select className='select' onChange={(e)=> setRegion(e.target.value)}>
                    {
                        uniqueRegion.map(data => <option value={data}>{data}</option>)
                    }                    
                </select>
                <select className='select' onChange={(e)=> setSector(e.target.value)}>
                    {
                        uniqueSector.map(data => <option value={data}>{data}</option>)
                    }                    
                </select>
                
            </div>
            <div className=' grid grid-cols-3 gap-5 p-4'>
                {
                    filterBySector && filterBySector.map((data, index) => <SingleChart key={index} data={data} />).slice(0, 51)
                }
            </div>
        </div>
    );
};

export default Charts;