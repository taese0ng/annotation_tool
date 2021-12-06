import React, { useEffect, useState } from 'react';
import './App.css';
import { Signin, Home } from 'pages';

const App: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        setIsLogin(true);
    }, []);

    return <div className="App">{isLogin ? <Home /> : <Signin />}</div>;
};

export default App;
