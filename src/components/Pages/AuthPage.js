import './AuthPage.css';

const AuthPage = () => {
    return (
        <div className='loginBack'>
            <div className='loginBox'>
                    <div className='leftimg'></div>
                    <div className='rightbox'>
                        <div className='logo'>ExpenseTracker</div>
                        <div className='hello'>Hello,</div>
                        <div className='welcome'>welcome!</div>
                        <div className='loginPassBox'>login and password box</div>
                        <div className='loginSigninBox'>login and signup button</div>
                        <div className='haveAccount'>Have a account</div>
                    </div>
            </div>
        </div>
    );
}
export default AuthPage;