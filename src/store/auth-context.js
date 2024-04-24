import React, {useState} from "react";

const AuthContex = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContexProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLogin = !!token; //retun true or false

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLogin,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContex.Provider value={contextValue}>
        {props.children}
        </AuthContex.Provider>
    )
};

export default AuthContex;