import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {
    
    const [businessData, setbusinessData] = useState([]);

    useEffect(() => {
        axios.get('https://rocky-falls-43835.herokuapp.com/businessdata')
            .then(res => setbusinessData(res.data));
    }, [])

    return [businessData]
}

export default useData;