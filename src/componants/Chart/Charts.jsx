import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useData from '../Hook/useData';
import SingleChart from './SingleChart';

const Charts = () => {

    //const [businessData, loading] = useData();
    const [businessData, setBusinessData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        axios.get("assignmentData.json")
        .then(res => setBusinessData(res.data))
        setLoading(false)
    },[])

    // Filtering by End year
    const [endYear, setEndyear] = useState([]);
    const [topic, setTopic] = useState([]);
    const [region, setRegion] = useState([]);
    const [sector, setSector] = useState([]);
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState([]);


    const years = businessData.filter(data => data.end_year);
    const yearArray = years.map(data => data.end_year);
    // const uniqueYear = [[...new Set(yearArray)]]; // working but not working for the select
    const uniqueYear = (Array.from(new Set(yearArray))).sort();
    const endYearFilter = businessData.filter(data => data.end_year === parseInt(endYear));

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

    // Filter by country
    const allCountry = (businessData.filter(data => data.country)).map(data => data.country);
    const uniqueCountry = (Array.from(new Set(allCountry))).sort();
    const filterByCountry = businessData.filter(data => data.country === country);

    // Search by country name Functions
    const searchResult = (e) => {
        const searchText = e.target.value;
        const searchResult = businessData.filter((product) => product.country.toLowerCase().includes(searchText.toLowerCase()));
        setSearch(searchResult);
    }

    if(loading) {
        return <h1>Loading....</h1>
    } 

    // Services All
    let loadBusinessData;

    if (endYearFilter.length > 0) {
        loadBusinessData = endYearFilter;

    }
    else if (filterByTopic.length > 0) {
        loadBusinessData = filterByTopic;
    }
    else if (filterByRegion.length > 0) {
        loadBusinessData = filterByRegion;
    }
    else if (filterBySector.length > 0) {
        loadBusinessData = filterBySector;
    }
    else if (filterByCountry.length > 0) {
        loadBusinessData = filterByCountry;
    }
    else if (search.length > 0) {
        loadBusinessData = search;
    }
    else{
        loadBusinessData = businessData;
    }

    return (
        <div>
            <div className='my-5 bg-slate-200 py-3 px-3 rounded-xl'>

                <select className='select mr-2' onChange={(e) => {
                    setEndyear(e.target.value);
                    setTopic(0);
                    setRegion(0);
                    setSector(0);
                    setCountry(0);

                }}>
                    <option >End Year</option>
                    {
                        uniqueYear.map(data => <option value={data}>{data}</option>)
                    }
                </select>

                <select className='select mr-2' onChange={(e) => {
                    setTopic(e.target.value);
                    setEndyear(0);
                    setRegion(0);
                    setSector(0);
                    setCountry(0);
                }}>
                    <option >Topic</option>
                    {
                        uniqueTopic.map(data => <option value={data}>{data}</option>)
                    }
                </select>
                <select className='select mr-2' onChange={(e) => {
                    setRegion(e.target.value);
                    setEndyear(0);
                    setTopic(0);
                    setSector(0);
                    setCountry(0);
                }}>
                    <option >Region</option>
                    {
                        uniqueRegion.map(data => <option value={data}>{data}</option>)
                    }
                </select>
                <select className='select mr-2' onChange={(e) => {
                    setSector(e.target.value);
                    setEndyear(0);
                    setTopic(0);
                    setRegion(0);
                    setCountry(0);
                }}>
                    <option >Sector</option>
                    {
                        uniqueSector.map(data => <option value={data}>{data}</option>)
                    }
                </select>
                <select className='select mr-2' onChange={(e) => {
                    setCountry(e.target.value);
                    setEndyear(0);
                    setTopic(0);
                    setRegion(0);
                    setSector(0);
                }}>
                    <option >Country</option>
                    {
                        uniqueCountry.map(data => <option value={data}>{data}</option>)
                    }
                </select>

                <input className="input select-bordered" placeholder='Search...' onChange={searchResult} />

            </div>
            <div className=' grid grid-cols-3 gap-5 p-4'>
                {
                    loadBusinessData && loadBusinessData.map((data, index) => <SingleChart key={index} data={data} />).slice(0, 51)
                }
            </div>
        </div>
    );
};

export default Charts;