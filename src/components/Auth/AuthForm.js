import { useState } from 'react';
import './AuthForm.css';
const AuthForm = () =>{
    const [haveAccount, setHaveAccount] = useState(false);
    const loginSignupHandler = () =>{
        setHaveAccount(!haveAccount)
    }
    return (
        <div className='loginBack'>
            <div className='loginBox'>
                    <div className='leftimg'></div>
                    <div className='rightbox'>
                        <div className='logo'>ExpenseTracker.in</div>
                        <div className='hello'>{haveAccount ?'Hello,': 'Create an account,'}</div>
                        <div className='welcome'>{haveAccount ? 'welcome!':'and Enjoy!'}</div>

                        {/* Add form */}
                            <div className='loginPassBox'>
                                <div className='emailBox'>
                                    <input type="email" className="email" id="email" placeholder="Enter your Email" required/>
                                </div>
                                <div className="passwordBox ">
                                    <input type="password" className="password" id="password" placeholder="Enter Password" required/>
                                </div>
                            </div>
                            <div className='loginSigninBox'>
                                <button className='loginBtn'>{haveAccount ? 'Login' : 'SignUp'}</button>
                            </div>
                        

                        <div className='haveAccount' onClick={loginSignupHandler}>
                            {haveAccount?"Don't have an account? SignUp":"Have an account? LogIn"}
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default AuthForm;