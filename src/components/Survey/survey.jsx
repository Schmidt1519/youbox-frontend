import React, { useState, useEffect } from 'react';
import useForm from "../UseForm/useForm"
import { Col,Button, Form } from 'react-bootstrap';
import { option } from 'react-bootstrap';
import axios from 'axios';

function SurveyForm (props) {
    const {values, handleChange, handleSubmit} = useForm(UserAnswers);
    const [redirect,setRedirect] = useState(false);
    const [selectedSub,setSelectedSub] = useState([]);
    const [businessClothes,setBusinessClothes] = useState([]);
    const [stlylAns,setStlylAns] = useState([]);
    const [deliveryDate,setDeliveryDate] = useState([]);
    const [submitted,setSubmitted] = useState(false);
    const [clothing,setClothing] = useState([]);
    const [allImages,setAllImages] = useState([]);

    useEffect(() => {
        getStyleClothes('Business');
        getDeliveryDate();
        getAllimages();
      },[]);

    let getStyleClothes = async (style) => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/clothes-filter/${style}/`);
            console.log(response.data);
                setBusinessClothes(response.data) 
        }
        catch(err) {
            console.log(err);
        }
    }

    let getAllimages = async () => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/image/');
            console.log(response.data);
            setAllImages(response.data);
            console.log(allImages);
        }
        catch(err) {
            console.log(err);
        }
    }

    let getDeliveryDate = (separator='-') =>{
        let newDate = new Date()
        let date = newDate.getDate() + 3;
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        setDeliveryDate(`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`)
    }

    async function UserAnswers() {
        const survAnswers = {...values}
        let selected = props.allSubscriptions.filter(sub => sub.id == survAnswers.subId)
        setSelectedSub(selected)
        setStlylAns(survAnswers.style)
        let pattern;
        
            let brand = businessClothes.filter(clothes => clothes.brand == survAnswers.brand)
            let size = brand.filter(clothes => clothes.size == survAnswers.size)
            let color = size.filter(clothes => clothes.color == survAnswers.color)
            let material = color.filter(clothes => clothes.material == survAnswers.material)
            pattern = material.filter(clothes => clothes.pattern == survAnswers.pattern)
        
            setClothing(pattern)

        let items = []
        for(let i =0;i<clothing.length;i++){
                 const item ={
                    brand: clothing[i].brand,
                    color: clothing[i].brand,
                    id: clothing[i].id,
                    image_Id: clothing[i].image_Id,
                    material: clothing[i].material,
                    pattern: clothing[i].pattern,
                    size: clothing[i].size,
                    style: clothing[i].style,
                    type: stlylAns,
                    user_Id: clothing[i].user_Id
                 }
                items.push(item)
        }

        let clothingItems = [];
        
        for(let i=0; i<items.length;i++){
            clothingItems.push(items[i].id)
        }

        const order = {
            "user_Id": props.user.id,
            "subscription_Id": selected[0].id,
            "clothing_Items": clothingItems,
            "total": selected[0].price,
            "est_Delivery": deliveryDate
        }
        
        setSubmitted(true) 
        console.log(pattern,clothingItems)
        console.log(survAnswers,props,selected[0],pattern,clothingItems, order,deliveryDate)
    }

    if(submitted===false){

    return(
        <div>
            <div  class="card text-primary">
                    <h1 class="card-body pricing-card-title ">We'll suggest a subscription based on your answers</h1>
                </div><br/>
            <div>
            <Form onSubmit={handleSubmit}>
            <div class='row col-12 '>
                <center>
                <div class='col-6'>
                <div class='col-8 card text-primary'>
                    <label for="subId">Choose delivery frequency</label>
                        <div>
                        
                            <select class='col-6'
                            name="subId" 
                            onChange={handleChange} 
                            value={values.subId} 
                            >
                                <option >Choose</option>
                                <option value='1'>Monthly</option>
                                <option value='2'>Bi-Weekly</option>
                                <option value='3'>Weekly</option> 
                            </select>
                        </div>
                        </div>
                        </div>
                        </center>
                 </div><br/>
                 <div class='row col-12 '>
                    <div class='col-6'>
                        <div class='col-8 card text-primary'>
                            <label for='style'>Choose your style</label>
                            <div>
                       
                            <select class='col-6'
                            name='style' 
                            onChange={handleChange} 
                            value={values.style} 
                            >
                                <option >Choose</option>
                                <option value={values.style}>Business</option>
                                <option value={values.style}>Business Casual</option>
                                <option value={values.style}>Casual</option>
                            </select>
                            </div>
                        </div>
                    </div>
                 <br/>
                 
                    <div class='col-6'>
                        <div class='col-8 card text-primary'>
                        <label for='brand'>Choose a Brand</label>
                            <div>
                       
                            <select class='col-6'
                            name='brand' 
                            onChange={handleChange} 
                            value={values.brand} 
                            >
                                <option >Choose</option>
                                <option value={values.brand}>Nike</option>
                                <option value={values.brand}>Ralph Lauren</option>
                                <option value={values.brand}>Champion</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    </div><br/>
                 <div class='row col-12 '>
                    <div class='col-6'>
                    <div class='col-8 card text-primary'>
                        <label for='brand'>What is your size?</label>
                        <div>
                        
                            <select class='col-6'
                            name='size' 
                            onChange={handleChange} 
                            value={values.size} 
                            >
                                <option >Choose</option>
                                <option value={values.size}>Large</option>
                                <option value={values.size}>Medium</option>
                                <option value={values.size}>Small</option>
                            </select>
                        </div>
                    </div>
                </div>
                 <br/>
                 
                 <div class='col-6'>
                    <div class='col-8 card text-primary'>
                    <label for='color'>Choose a color</label>
                        <div>
                        
                            <select class='col-6'
                            name='color' 
                            onChange={handleChange} 
                            value={values.color} 
                            >
                                <option >Choose</option>
                                <option value={values.color}>Black</option>
                                <option value={values.color}>Red</option>
                                <option value={values.color}>Blue</option>
                            </select>
                        </div>
                    </div>
                 </div>
                 </div>
                 <br/>
                 <div class='row '>
                    <div class='col-6'>
                        <div class='col-8 card text-primary'>
                    <       label for='material'>Choose your material</label>
                        <       div>
                            <select class='col-6'
                            name='material' 
                            onChange={handleChange} 
                            value={values.material} 
                            >
                                <option >Choose</option>
                                <option value={values.material }>Silk</option>
                                <option value={values.material }>Nylon</option>
                                <option value={values.material }>Cotton</option>
                            </select>
                                </div>
                        </div>
                    </div>
                 <br/>
                 <div class='col-6'>
                 <div class='col-8 card  text-primary'>
                    <label for='pattern'>Choose your pattern</label>
                        <div>
                            <select class='col-6'
                            name='pattern' 
                            onChange={handleChange} 
                            value={values.pattern} 
                            >
                                <option >Choose</option>
                                <option value={values.pattern}>Solid</option>
                                <option value={values.pattern}>Striped</option>
                                <option value={values.pattern}>Plaid</option>
                            </select>
                        </div>
                        </div>
                 </div>
                 </div>
                <br/>
                <Button variant="primary" type="submit">Submit</Button>

            </Form>
          </div>
        </div>
    )
}
else{
    console.log(clothing)

    let clothes = clothing.map((sub)=>{
        let string='../images/'
        let imgName=string.concat(sub.type)
        let strPath = '.jpg'
        let path = imgName.concat(strPath)
        return  <div class="col-3 card free mb-4 shadow-sm">
        <div class="card-header text-primary">
        <img src={path} class='image'  width="150" height="150"/>
            <h4 class="my-0 font-weight-normal heading ">{sub.brand} {sub.type}</h4>
        </div>
        <div class="card-body">
            <h6 class="card-title pricing-card-title ">{stlylAns} <small class="text-muted"> Style</small></h6>
            <ul class="list-unstyled mt-3 mb-4">
                <li>Pattern: {sub.pattern}</li>
                <li>Size: {sub.size}</li>
                <li>Color: {sub.color}</li>
            </ul>
        </div>
    </div>
    
    })

    return(
        <div  class="container">
            <div  class="card text-primary">
                <h3 class="card-body pricing-card-title ">{props.user.first_name}, based on your answers we suggest the {selectedSub[0].name} package</h3>
            </div><br/>
            <div class="row mb-3 text-center ">
                <div class="col-3 card free mb-4 shadow-sm">
                    <div class="card-header text-primary">
                        <h4 class="my-0 font-weight-normal heading ">{selectedSub[0].name}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title ">${selectedSub[0].price} <small class="text-muted">/ mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>{selectedSub[0].delivery_Freq} Delivery</li>
                                <li>Includes {selectedSub[0].number_Items} articles of Clothing</li>
                                <li>Every third delivery you'll receive an upgrade!</li>
                                <li>Use upgrades to add an extra article of clothing on your next delivery</li>
                            </ul><br/>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary free">Get {selectedSub[0].name}</button>
                    </div>
                </div>
                <div class='col'>
                    <center>
                    <div  class="col-4 card text-primary">
                        <h6 class="card-body pricing-card-title ">We suggest this outfit</h6>
                    </div></center><br/>
                    <div class='col'>
                        <div class=" row card-body text-center ">
                        
                        {clothes}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default SurveyForm;