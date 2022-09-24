import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useData from '../Hook/useData';
import BarChart from './BarChart';
import LineChart from './LineChart';
import SingleChart from './SingleChart';

import { UserData } from './UserData';


const Charts = () => {


    const [businessData] = useData();

    /* const [chartDtada, setbusinessData] = useState({
        labels: ["Intencity", "Revelance", "Like Hood", "Start - 2022"],
        datasets: [
            {
                label: "Bangladesh",
                data: [4, 6, 14],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: ['red', "green", "yellow", "blue"],
            }
        ]
    }); */

    return (
        <div className=' grid grid-cols-3 gap-3 p-4'>


            {
                businessData && businessData.map((data, index) => <SingleChart key={index} data={data} />).slice(0, 50)
            }
            
            
            <SingleChart/>
            
        </div>
    );
};

export default Charts;