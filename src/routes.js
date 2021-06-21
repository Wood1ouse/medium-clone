import {Switch, Route} from 'react-router-dom'
import Auth from "./pages/Auth";
import GlobalFeed from "./pages/GlobalFeed";
import YourFeed from "./pages/YourFeed";
import Article from "./pages/Article";
import TagFeed from './pages/TagFeed'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={GlobalFeed} exact/>
            <Route path='/feed' component={YourFeed} />
            <Route path='/tags/:slug' component={TagFeed} />
            <Route path='/articles/:slug' component={Article}/>
            <Route path='/login' component={Auth}/>
            <Route path='/register' component={Auth}/>
        </Switch>
    )
}

export default Routes