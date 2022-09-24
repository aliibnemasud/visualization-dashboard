import React, { useState } from 'react';
import useData from '../Hook/useData';
import SingleChart from './SingleChart';

const Charts = () => {
    const [businessData] = useData();

    
    // Filtering by End year
    const [endYear, setEndyear] = useState();

    const endYearFilter = businessData.filter(data => data.end_year === parseInt(endYear))
    const years = businessData.filter(data => data.end_year);
    const yearArray = years.map(data => data.end_year);    
    // const uniqueYear = [[...new Set(yearArray)]]; // working but not working for the select
    const uniqueYear = (Array.from(new Set(yearArray))).sort();

    // all
    let loadBusinessdata;



    return (
        <div>
            <div className='my-5 bg-slate-200 py-3 px-3 rounded-xl'>
                <input className="input select-bordered" placeholder='Search...' onBlur={(e)=> setEndyear(e.target.value)}/>

                <select className='select' onChange={(e)=> setEndyear(e.target.value)}>
                    {
                        uniqueYear.map(data => <option value={data}>{data}</option>)
                    }
                    
                </select>
                
            </div>
            <div className=' grid grid-cols-3 gap-5 p-4'>
                {
                    endYearFilter && endYearFilter.map((data, index) => <SingleChart key={index} data={data} />).slice(0, 51)
                }
            </div>
        </div>
    );
};

export default Charts;