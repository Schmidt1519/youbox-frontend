import { useState, useEffect } from 'react';
import axios from 'axios';


function Subscriptions(props) {
    const [allSubscriptions, setAllSubscriptions] = useState([]);

    useEffect(() => {
        getAllSubscriptions();
    }, []);

    let getAllSubscriptions = async () => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/sub/');
            console.log(response.data);
            setAllSubscriptions(response.data);
            console.log(allSubscriptions);
        }
        catch(err) {
            console.log(err);
        }
    }

    let Subscriptions = allSubscriptions.map((sub)=>{
        return  <div class="col-4 card free mb-4 shadow-sm">
        <div class="card-header ">
            <h4 class="my-0 font-weight-normal heading ph">{sub.name}</h4>
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title ">${sub.price} <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li>{sub.delivery_Freq} Delivery</li>
                <li>Includes {sub.number_Items} articles of Clothing</li>
                <li>Every third delivery you'll receive an upgrade!</li>
                <li>Use upgrades to add an extra article of clothing on your next delivery</li>
            </ul>
        </div>
    </div>
    })

    return(
        <div  class="container">
            <br/>
            <div class="row mb-3 text-center ">
                {Subscriptions}
            </div>
        </div>
    )

}

export default Subscriptions;