import {Switch, Route} from 'react-router-dom'
import Auth from "./pages/Auth"
import GlobalFeed from "./pages/GlobalFeed"
import YourFeed from "./pages/YourFeed"
import Article from "./pages/Article"
import TagFeed from './pages/TagFeed'
import CreateArticle from './pages/CreateArticle'
import EditArticle from './pages/EditArticle'
import Settings from './pages/Settings'
import UserProfile from './pages/UserProfile'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={GlobalFeed} exact/>
            <Route path='/profiles/:slug' component={UserProfile} exact/>
            <Route path='/profiles/:slug/favorites' component={UserProfile} exact/>
            <Route path='/feed' component={YourFeed} />
            <Route path='/tags/:slug' component={TagFeed} />
            <Route path='/articles/:slug' component={Article} exact/>
            <Route path='/articles/:slug/edit' component={EditArticle}/>
            <Route path='/editor' component={CreateArticle}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={Auth}/>
            <Route path='/register' component={Auth}/>
        </Switch>
    )
}

export default Routes