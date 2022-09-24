import React from 'react';
import BarChart from './BarChart';

const SingleChart = (props) => {
    // const {intensity, country, region, start_year, end_year} = props?.data;

    const data = [props?.data?.intensity, props?.data?.relevance, props?.data?.likelihood];

    if(!data){
        return <h1>Loading....</h1>
    }
    
  
    return (
        <div className='shadow-lg p-5 border'>
            <div className='flex justify-between my-4'>
                <div>
                    <h1 title='Country' className="text-2xl">{props?.data?.country}</h1>
                    <p title='Region' className=" mt-2">{props?.data?.region}</p>
                </div>
                
            </div>

            <BarChart chartData={{
                labels: ["Intencity", "Revelance", "Like Hood"],
                datasets: [
                    {
                        label: "Topics: Growth",
                        data: data,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: ['red', "green", "yellow", "blue"],
                    }
                ]
            }} />
            <h2 className='text-center text-3xl my-5'>Year</h2>
            <h2 className='text-center text-3xl my-5'>2020 - 2026</h2>
        </div>
    );
};

export default SingleChart;