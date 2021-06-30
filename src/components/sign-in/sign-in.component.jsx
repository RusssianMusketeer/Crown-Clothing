import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButoon from '../custon-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
       super(props);
       
       this.state = {
           email: '',
           password: ''
       }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange= event => {
        const {value, name} = event.target;

        this.setState({[name]: value})

    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" name="email" type="email" value={this.state.email} required />
                    
                    <FormInput handleChange={this.handleChange} label="password" name="password" type="password" value={this.state.password} required />
                    
                    <div className="buttons">
                    <CustomButoon type="submit" > Sign In</CustomButoon>
                    <CustomButoon onClick={signInWithGoogle} isGoogleSignIn> Sign In with google</CustomButoon>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;