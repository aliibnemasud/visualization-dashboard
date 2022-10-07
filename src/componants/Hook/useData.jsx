import axios from 'axios';
import { useEffect, useState } from 'react';

const useData = () => {    
    const [businessData, setbusinessData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://rocky-falls-43835.herokuapp.com/businessdata')
            .then(res => {
                setbusinessData(res.data)
                setLoading(false)                
            });
    }, [])

    return [businessData, loading]
}

export default useData;