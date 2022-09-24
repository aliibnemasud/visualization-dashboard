import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [hadisData, setHadisData] = useState([]);
    const [subCatagory, setSubcatagory] = useState([]);
    const [filterSubCat, setFilterSubCat] = useState([]);
    const [subId, setSubid] = useState(1);
    const [dooaa, setDooaa] = useState([]);

    useEffect(() => {
        axios.get('https://dua-backend.herokuapp.com/dua-main/category')
            .then(res => setHadisData(res.data.result))

        axios.get(`https://dua-backend.herokuapp.com/dua-main/sub-category`)
            .then(res => setSubcatagory(res?.data.result))
    }, [])
   
    const hadleLoadsub = (e) => {        
        const id = e.target.value;
        const subdata = subCatagory.filter(subcatagory => subcatagory.cat_id == id);
        setFilterSubCat(subdata)
    }

    const setSubCatId = (id) => {
        setSubid(id)
        console.log(id)
        axios.get(`https://dua-backend.herokuapp.com/dua-main/dua/${subId}`)
            .then(res => setDooaa(res?.data.result))
    }

    return (
        <div className='text-center'>
            <h1>Hello From home</h1>

            <select onChange={hadleLoadsub}>
                {
                    hadisData.map(singledata => <option value={singledata?.cat_id}>{singledata?.cat_name_en}</option>)
                }
            </select>

            {
                filterSubCat.map(subCat => <h1 className='cursor-pointer text-xl' onClick={() => setSubCatId(subCat?.no_of_dua)}>{subCat?.subcat_name_en}</h1>)
            }
            
        </div>
    );
};

export default Home;