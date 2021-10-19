import React from 'react';
import './SigninComp.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button-comp/custom-button-comp';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props) {        
            super(props);

            this.state = {
                email: '',
                password: ''
            }
        
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState ({email:'', password:'' })
        
    }
   

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({ [name]: value})
        
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email"
                     type="email"
                     label='Email'
                     handleChange={this.handleChange}
                     value={this.state.email}
                     required
                     
                     />
                   
                    <FormInput
                    name="password"
                    label='password'
                    type="password"
                    handleChange={this.handleChange}
                    value={this.state.password}
                    required
                    
                    />
                    

                    <CustomButton  type="submit">Sign In</CustomButton>
                    <CustomButton  onClick={signInWithGoogle}>
                        {''}
                        Sign In with Google
                        {''}
                        </CustomButton>

                </form>
            </div>
        )
    }
}
export default SignIn;
