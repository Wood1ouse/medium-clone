import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {CurrentUserProvider} from "./contexts/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker";
import Header from "./components/Header";
import Routes from "./routes";
import './scss/index.scss'


const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <div>
                    <Router>
                        <Header/>
                        <Routes/>
                    </Router>
                </div>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
