import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useData = () => {
    
    const [businessData, setbusinessData] = useState([]);

    useEffect(() => {
        axios.get('jsondata.json')
            .then(res => setbusinessData(res.data));
    }, [])


    return [businessData]
}

export default useData;