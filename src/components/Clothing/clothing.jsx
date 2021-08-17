import { useState, useEffect } from 'react';
import axios from 'axios';

function Items() {
    const [allItems, setItems] = useState([]);

    useEffect( async () => {
        await getAllItems();
    }, []);

    let getAllItems = async () => {
        try{
            let response = await axios.getAllItems('http://127.0.0.1:8000/clothes/');
            console.log(response.data);
            setAllItems(response.data);
            console.log(allItems);
        }
        catch(err) {
            console.log(err);
        }
    }

}

export default Items;