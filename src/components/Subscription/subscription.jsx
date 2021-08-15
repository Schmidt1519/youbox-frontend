import { useState, useEffect } from 'react';
import axios from 'axios';

function Subscriptions() {
    const [allSubscriptions, setAllSubscriptions] = useState([]);

    useEffect( async () => {
        await getAllSubscriptions();
    }, []);

    let getAllSubscriptions = async () => {
        try{
            let response = await axios.getAllSubscriptions('http://127.0.0.1:8000/sub/');
            console.log(response.data);
            setAllSubscriptions(response.data);
            console.log(allSubscriptions);
        }
        catch(err) {
            console.log(err);
        }
    }

}

export default Subscriptions;