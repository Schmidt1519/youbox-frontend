import { useState, useEffect } from 'react';
import axios from 'axios';
import './Sub.css'
import {Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import survey from '../pu'


function Subscriptions(props) {
    if(props.allSubscriptions===undefined){
        return null
    }else{

    if(props.loggedIn===false){

        let Subscriptions = props.allSubscriptions.map((sub)=>{
            return  <div class="col-4 card free mb-4 shadow-sm">
            <div class="card-header text-primary">
                <h4 class="my-0 font-weight-normal heading ">{sub.name}</h4>
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
                        <div class="row">
                            <center>
                            <div>
                            <Button active ><Link style={{textDecoration:'none', color: 'white'}} to={{pathname: '/survey', query:{}}}>Take survey</Link></Button>
                            </div>
                            </center>
                        </div>
                    </div>
        )}

        if(props.loggedIn===true && props.user.role==='customer'){

            let Subscriptions = props.allSubscriptions.map((sub)=>{
                return  <div class="col-4 card free mb-4 shadow-sm">
                <div class="card-header text-primary">
                    <h4 class="my-0 font-weight-normal heading ">{sub.name}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title ">${sub.price} <small class="text-muted">/ mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>{sub.delivery_Freq} Delivery</li>
                        <li>Includes {sub.number_Items} articles of Clothing</li>
                        <li>Every third delivery you'll receive an upgrade!</li>
                        <li>Use upgrades to add an extra article of clothing on your next delivery</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary free">Get {sub.name}</button>
                </div>
            </div>
            })
        
            return(
                <div  class="container">
                    <br/>
                    <div class="row mb-3 text-center ">
                        {Subscriptions}
                    </div>
                    <div class="row">
                        <center>
                        <div class="card border-0 shadow">
                            <img src="../public/images/surveyimg.png"  width="150" height="100"/>
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Content in Template 3</h5>
                                <div class="card-text text-black-50">Content in Template 3</div>
                            </div>
                        </div>
                        <div>
                        <Button active ><Link style={{textDecoration:'none', color: 'white'}} to={{pathname: '/survey'}}>Take survey</Link></Button>
                        </div>
                        </center>
                    </div>
                </div>
            )}

            else{

                let Subscriptions = props.allSubscriptions.map((sub)=>{
                    return  <div class="col-4 card free mb-4 shadow-sm">
                    <div class="card-header text-primary">
                        <h4 class="my-0 font-weight-normal heading ">{sub.name}</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title ">${sub.price} <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>{sub.delivery_Freq} Delivery</li>
                            <li>Includes {sub.number_Items} articles of Clothing</li>
                            <li>Every third delivery you'll receive an upgrade!</li>
                            <li>Use upgrades to add an extra article of clothing on your next delivery</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary free">Get {sub.name}</button>
                    </div>
                </div>
                })
            
                return(
                    <div  class="container">
                        <br/>
                        <div class="row mb-3 text-center ">
                            {Subscriptions}
                        </div>
                        <div class="row">
                            <center>
                            <div class="card border-0 shadow">
                            <img src="images/surveyimg.png"  width="150" height="100"/>
                                <div class="card-body text-center">
                                    <h5 class="card-title mb-0">Content in Template 3</h5>
                                    <div class="card-text text-black-50">Content in Template 3</div>
                                </div>
                            </div>
                            <div>
                            <Button active ><Link style={{textDecoration:'none', color: 'white'}} to={{pathname: '/survey'}}>Take survey</Link></Button>
                            </div>
                            </center>
                        </div>
                    </div>
                )}
        }
}

export default Subscriptions;