import React, { useState } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import useForm from './useForm';
import Form from 'react-bootstrap/Form'
import { Button, Container } from "react-bootstrap";

const RegisterForm = (props) => {
    const {values, handleChange, handleSubmit} = useForm(createUser);
    const [redirect,setRedirect] = useState(false);

    async function createUser() {
        console.log(values.phone);
        let string = values.phone;
        let number = parseInt(string);
        const addUser = {...values, ['phone']: number, ['role']: "customer"}
        console.log(addUser);
        props.registerUser(addUser);
        setRedirect(true)
    }

    return(
        <div>
            {!redirect ?
            <Container>
                <br/>
            <Form onSubmit={handleSubmit}>
            <label>Email:
                <br/>
                    <input
                        type='text'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                    />
                </label>
                <br/>
                <br/>
            <label>Username:
            <br/>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={values.username}
                    />
                </label>
                <br/>
                <br/>
                <label>First Name:
                <br/>
                    <input
                        type='text'
                        name='first_name'
                        onChange={handleChange}
                        value={values.first_name}
                    />
                </label>
                <br/>
                <br/>
                <label>Last Name:
                <br/>
                    <input
                        type='text'
                        name='last_name'
                        onChange={handleChange}
                        value={values.definition}
                    />
                </label>
                <br/>
                <br/>
                <label>Phone:
                <br/>
                    <input
                        type='text'
                        name='phone'
                        onChange={handleChange}
                        value={values.phone}
                    />
                </label>
                <br/>
                <br/>
                <label>Street Address:
                <br/>
                    <input
                        type='text'
                        name='street_Address'
                        onChange={handleChange}
                        value={values.street_Address}
                    />
                </label>
                <br/>
                <br/>
                <label>City:
                <br/>
                    <input
                        type='text'
                        name='city'
                        onChange={handleChange}
                        value={values.city}
                    />
                </label>
                <br/>
                <br/>
                <label>State:
                <br/>
                    <input
                        type='text'
                        name='state'
                        onChange={handleChange}
                        value={values.state}
                    />
                </label>
                <br/>
                <br/>
                <label>Zip Code:
                <br/>
                    <input
                        type='text'
                        name='zip_Code'
                        onChange={handleChange}
                        value={values.zip_Code}
                    />
                </label>
                <br/>
                <br/>
                <label>Password:
                <br/>
                    <input
                        type='text'
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                    />
                </label>
                <br/>
                <br/>
                <button type='submit'>Register</button>
            </Form>
            </Container>
            : <Redirect to='/'/>}
        </div>
    )
};

export default withRouter (RegisterForm);