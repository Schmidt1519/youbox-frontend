import React, { useState } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import useForm from "../UseForm/useForm"
import Form from 'react-bootstrap/Form';

const LoginForm = (props) => {
    const {values, handleChange, handleSubmit} = useForm(loginUser);
    const [redirect,setRedirect] = useState(false);

    async function loginUser() {
        const login = {...values}
        props.loginCurrentUser(login);
        setRedirect(true);
    }

    return(
        <div>
            {!redirect ? 
            <Form onSubmit={handleSubmit}>
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
                <button type='submit'>Login</button>
                
            </Form>
            : <Redirect to='/'/>}
        </div>
    )
};

export default withRouter (LoginForm);