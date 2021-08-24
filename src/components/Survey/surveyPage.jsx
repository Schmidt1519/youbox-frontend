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
            <br/>
            <SurveyForm user={props.user} filteredSubscriptions={props.filteredSubscriptions} filterSubscriptions={props.filterSubscriptions} allSubscriptions={props.allSubscriptions} />
            </Container>
            </center>
        </div>
    )
}

export default withRouter(SurveyPage);