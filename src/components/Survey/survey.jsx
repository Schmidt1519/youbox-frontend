import React, { useState } from 'react';
import useForm from "../UseForm/useForm"
import { Col,Button, Form } from 'react-bootstrap';
import { option } from 'react-bootstrap';

function SurveyForm (props) {
    const {values, handleChange, handleSubmit} = useForm(UserAnswers);
    const [redirect,setRedirect] = useState(false);

    async function UserAnswers() {
        const login = {...values}
        console.log(login,props)
    }

    return(
        <div>
            <div>
            <Form onSubmit={handleSubmit}>
                <div class='row col-12 '>
                <div class='col-6'>
                <div class='col-8 card text-primary'>
                    <label for="delivery_Freq">Choose delivery frequency</label>
                        <div>
                        
                            <select class='col-6'
                            name="delivery_Freq" 
                            onChange={handleChange} 
                            value={values.delivery_Freq} 
                            >
                                <option >Choose</option>
                                <option value={values.delivery_Freq}>Monthly</option>
                                <option value={values.delivery_Freq}>Bi-Weekly</option>
                                <option value={values.delivery_Freq}>Weekly</option> 
                            </select>
                        </div>
                        </div>
                 </div><br/>
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
                 </div><br/>
                 <div class='row col-12 '>
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
                 </div><br/>
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
                 </div><br/>
                 <div class='row '>
                 <div class='col-4'>
                 <div class='col-12 card text-primary'>
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
                 <br/>
                 <div class='col-4'>
                 <div class='col-12 card text-primary'>
                    <label for='material'>Choose your material</label>
                        <div>
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
                 <div class='col-4'>
                 <div class='col-12 card text-primary'>
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

export default SurveyForm;