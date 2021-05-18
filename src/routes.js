import React from "react";
import Auth from "./pages/auth/Auth";
import GlobalFeed from "./pages/globalFeed/GlobalFeed";
import Article from "./pages/article/Article";
import {Switch, Route} from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={GlobalFeed} exact/>
            <Route path='/articles/:slug' component={Article}/>
            <Route path='/login' component={Auth}/>
            <Route path='/register' component={Auth}/>
        </Switch>
    )
}

export default Routes