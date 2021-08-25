import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import { Container, Button, Alert, Card } from "react-bootstrap";



function Profile(props){
    console.log(props)

    return(
        <div  class="container">
            <br/><center>
            <div  class="card text-primary">
                <h3 class="card-body pricing-card-title ">{props.user.first_name}, welcome to your profile!</h3>
            </div><br/>
            <div class="row mb-3 ">
                <center>
            <div class="col-10 card free mb-4 shadow-sm">
                    <div class="card-header text-primary"><br/>
                    <img src='../images/20210804_155955.jpg' class='image'  width="175" height="200"/><br/><br/>
                        <h2 class="my-0 font-weight-normal heading ">{props.user.first_name} {props.user.last_name}</h2>
                    </div><br/>
                    <div class="card-body">
                        <h3 class="card-title pricing-card-title ">Role<small class="text-muted">: {props.user.role}</small></h3>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Username: {props.user.username}</li>
                                <li>Email: {props.user.email}</li>
                                <li>Phone Number: {props.user.phone}</li>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Address:</li>
                                        <li>Sreet: {props.user.street_Address}</li>
                                        <li>City: {props.user.city}</li>
                                        <li>State: {props.user.state}</li>
                                        <li>Zip Code: {props.user.zip_Code}</li>
                            </ul>
                            </ul><br/>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary free">Edit</button>
                    </div>
                </div></center>
            </div>
            </center>
        </div>
    )
}

export default withRouter(Profile);