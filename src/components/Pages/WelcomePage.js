import { NavLink } from 'react-router-dom';
import './WelcomePage.css';
const WelcomePage = () =>{
    return (
        <>
            <div className="header">
                <h4>ExpenseTracker.in</h4>
                <button>LogIn/SignUp</button>
            </div>
            <div className='contents'>
                <div className='line'>
                    <h2>Simple way</h2>
                    <h1><span>to manage</span> personal finances.</h1>
                </div>
                <div className='sgnbtn'>
                    <button>
                            {/* In react router we can change Link style but it recommended that use NavLink to style. */}
                            <NavLink className='navlink1' to='/auth'>SignUp / LogIn</NavLink>
                    </button>
                </div>
            </div>
        </>
    );
};
export default WelcomePage;