import { useRef, useState } from 'react';
import './AuthForm.css';
const AuthForm = () =>{
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    
    const [haveAccount, setHaveAccount] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (event) =>{
        event.preventDefault();
        const emailEntered = emailInputRef.current.value;
        const passwordEntered = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if(haveAccount){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8qtTJI1TZiZajaOt0D7WFDkZtrDcoSrM'
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8qtTJI1TZiZajaOt0D7WFDkZtrDcoSrM'
        }
        fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: emailEntered,
                    password: passwordEntered,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            setIsLoading(false);
            if(res.ok){
                return res.json();
            }else{
                res.json().then(data => {
                    let errorMessage = 'Authentication Failed!';
                    if(data && data.error && data.error.message){
                        errorMessage = data.error.message;
                    }
                    // alert(errorMessage);
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            console.log(data);
        }).catch(err =>{
            alert(err.message);
        });
    };

    const loginSignupHandler = () =>{
        setHaveAccount(!haveAccount)
    }
    return (
        <div className='loginBack'>
            <div className='loginBox'>
                    <div className='leftimg'></div>
                    <div className='rightbox'>
                        <div className='logo'>ExpenseTracker.in</div>
                        <div className='hello'>{haveAccount ?'Hello,': "Create an account,"}</div>
                        <div className='welcome'>{haveAccount ? 'welcome!':'and Enjoy!'}</div>

                        <form className='loginPassBox' onSubmit={submitHandler}>
                                <div className='emailBox'>
                                    <input type="email" className="email" id="email" placeholder="Enter your Email" ref={emailInputRef} required/>
                                </div>
                                <div className="passwordBox ">
                                    <input type="password" className="password" id="password" placeholder="Enter Password" ref={passwordInputRef} required/>
                                </div>
                                <div className='loginSigninBox'>
                                    {!isLoading && <button className='loginBtn'>{haveAccount ? 'Login' : 'SignUp'}</button>}
                                    {isLoading && <button className='loginBtn'>Loading...</button>}
                                </div>
                        </form>

                        <div className='haveAccount' onClick={loginSignupHandler}>
                            {haveAccount?"Don't have an account? SignUp":"Have an account? LogIn"}
                        </div>
                        <div className='forgetPassword'>
                            {haveAccount?<span>Forget Password</span>:""}
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default AuthForm;