import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import { Container, Button, Alert, Card } from "react-bootstrap";
import SurveyForm from "./survey";


function SurveyPage(props){
    console.log(props)

    return(
        <div>
            <br/>
            <br/>
            <center>
            <Container>
                <div  class="card text-primary">
                    <h1 class="card-body pricing-card-title ">We'll suggest a subscription based on your answers</h1>
                </div>
            <br/>
            <SurveyForm allSubscriptions={props.allSubscriptions} />
            </Container>
            </center>
        </div>
    )
}

export default withRouter(SurveyPage);