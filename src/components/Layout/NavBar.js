import './NavBar.css';

const NavBar = () =>{
    return (
        <div className="nav">
            <h4>ExpenseTracker.in</h4>
            <div className='navBtn'>
                <button>Home</button>
                <button>MTracker</button>
                <button>About</button>
                <button>Profile</button>
            </div>
        </div>
    );
};
export default NavBar;